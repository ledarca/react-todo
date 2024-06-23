import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const App = ({ tableName }) => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc'); // Initial ascending order

  useEffect(() => {
    fetchData(); // Load data at the start
  }, [tableName, sortOrder]); // Dependency to reload data when tableName or sortOrder changes

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []); // Load todoList from localStorage on initial render

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const airtableURL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${tableName}`;
      const response = await fetch(`${airtableURL}?sort[0][field]=title&sort[0][direction]=${sortOrder}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const sortedTodos = data.records.map(record => ({
        id: record.id,
        title: record.fields.title,
        completedAt: record.fields.completedAt,
      }));
      setTodoList(sortedTodos);
      localStorage.setItem('todoList', JSON.stringify(sortedTodos)); // Update localStorage
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to add a new task
  const addTodo = async (newTodo) => {
    if (!newTodo.title.trim()) { // Data validation
      alert('Please enter a valid title for the assignment.');
      return;
    }
    try {
      const currentDate = new Date().toISOString().slice(0, 10);
      const response = await fetch(`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${tableName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
        },
        body: JSON.stringify({ fields: { title: newTodo.title, completedAt: currentDate } })
      });

      if (!response.ok) {
        throw new Error('Error: ' + response.status);
      }

      const responseData = await response.json();
      const newTodoItem = {
        id: responseData.id,
        title: responseData.fields.title,
        completedAt: responseData.fields.completedAt
      };

      setTodoList(prevTodoList => [...prevTodoList, newTodoItem]);
      // After adding, fetch updated data
      fetchData();
    } catch (error) {
      console.error('Error adding new todo:', error);
    }
  };

  // Function to remove an existing task
  const removeTodo = async (id) => {
    try {
      const airtableURL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${tableName}/${id}`;
      const response = await fetch(airtableURL, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
      });
      if (!response.ok) {
        throw new Error('Error: ' + response.status);
      }
      const updatedTodoList = todoList.filter(todo => todo.id !== id);
      setTodoList(updatedTodoList);
      localStorage.setItem('todoList', JSON.stringify(updatedTodoList)); // Update localStorage
    } catch (error) {
      console.error('Error removing todo:', error);
    }
  };
  
  // Function to change the sort order
  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <div>
      <button onClick={toggleSortOrder} className="order">
        Toggle Sort Order
      </button>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </div>
  );
};

App.propTypes = {
  tableName: PropTypes.string.isRequired,
};

export default App;
