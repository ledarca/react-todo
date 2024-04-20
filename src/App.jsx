import "./App.css";
import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  //const Is = JSON.parse(localStorage.getItem('todoList')) ?? [];
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) ?? []);
  const [isLoading, setIsLoading] = useState(true);

  // First effect useEffect to load the initial data
  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { todoList } });
      }, 2000);
    });

    promise.then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  // Second effect useEffect to save the data to localStorage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  // Functions to add and delete tasks
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  // Component rendering
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </>
  );
}

export default App;








