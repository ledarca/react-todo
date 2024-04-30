import "./App.css";
import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) ?? []);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial data and save to localStorage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
        const options = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
          }
        };
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Error: ${response.status}');
        }
        const data = await response.json();
        const todos = data.records.map(record => ({
          id: record.id,
          title: record.fields.title,
          createTime: record.createdTime
        }));
        //console.log('Todos:', todos); 
        setTodoList(todos);
        localStorage.setItem('todoList', JSON.stringify(todos)); //save data, localstorage
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Function to add tasks
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  // Function to remove a todo
  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  // Render the component
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </>
  );
}

export default App;
