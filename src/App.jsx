import "./App.css";
import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const airtableURL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

function App() {
  
  // Load todoList from localStorage or initialize it as an empty array
  const storedTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
  const [todoList, setTodoList] = useState(storedTodoList);
  const [isLoading, setIsLoading] = useState(true);
   
  // Function to update todoList state
  const updateTodoList = (newTodoList) => {
    setTodoList([...newTodoList]);
  };

  // Load initial data from Airtable and save to localStorage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = airtableURL;
        const options = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
          }
        };
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        const todos = data.records.map(record => ({
          id: record.id,
          title: record.fields.title,
          createTime: record.createdTime
        }));
        updateTodoList(todos); // Update todoList status
        localStorage.setItem('todoList', JSON.stringify(todos));
      } catch (error) {
        console.error('Error fetching data:', error.message);
        // Handle error
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Function to add a new task
  const addTodo = async (newTodo) => {
    try {
      const currentDate = new Date().toISOString().slice(0, 10);
      const url = airtableURL;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
        },
        body: JSON.stringify({ fields: { title: newTodo.title, completedAt: currentDate } }) //Include the formatted date in the body of the request
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const responseData = await response.json();
      const newTodoItem = {
        id: responseData.id,
        title: responseData.fields.title,
        createTime: responseData.fields.createdTime,
        completedAt: responseData.fields.completedAt //Include the formatted date in the task object
      };
      setTodoList(prevTodoList => [...prevTodoList, newTodoItem]);
      localStorage.setItem('todoList', JSON.stringify([...todoList, newTodoItem]));
    } catch (error) {
      console.error('Error adding new todo:', error.message);
      // Handle error
    }
  };

  // Function to remove an existing task
  const removeTodo = async (id) => {
    try {
      const url = `${airtableURL}/${id}`; 
      const options = {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
        }
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const updatedTodoList = todoList.filter(todo => todo.id !== id);
      setTodoList(updatedTodoList);
      localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
    } catch (error) {
      console.error('Error removing todo:', error.message);
      // Handle error
    }
  };
  
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </>
  );
}

export default App;


