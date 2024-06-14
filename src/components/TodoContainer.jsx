import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc'); // State for the sort order

  const airtableURL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

  useEffect(() => {
    fetchData(); // Load data at the start
  }, [sortOrder]); // Runs when the sort order changes

  // Function to load data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(`${airtableURL}?sort[0][field]=title&sort[0][direction]=${sortOrder}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const todos = data.records.map(record => ({
        id: record.id,
        title: record.fields.title,
        completedAt: record.fields.completedAt
      }));
      setTodoList(todos); // Update the task list
      localStorage.setItem('todoList', JSON.stringify(todos)); // Save to localStorage
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to change the sort order
  const toggleSortOrder = () => {
    setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc'); // Toggle between 'asc' and 'desc'
  };

  // Function to add a new task
  const addTodo = async (newTodo) => {
    try {
      const currentDate = new Date().toISOString().slice(0, 10);
      const response = await fetch(airtableURL, {
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
      localStorage.setItem('todoList', JSON.stringify([...todoList, newTodoItem]));
    } catch (error) {
      console.error('Error adding new todo:', error);
    }
  };

  // Function to remove an existing task
  const removeTodo = async (id) => {
    try {
      const response = await fetch(`${airtableURL}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
        }
      });
      if (!response.ok) {
        throw new Error('Error: ' + response.status);
      }
      const updatedTodoList = todoList.filter(todo => todo.id !== id);
      setTodoList(updatedTodoList);
      localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
    } catch (error) {
      console.error('Error removing todo:', error);
    }
  };

  return (
    <div>
      <button onClick={toggleSortOrder} className='order'>Toggle Sort Order</button>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </div>
  );
};

export default TodoContainer;
