import "./App.css";
import TodoList from "./TodoList"; /**** Class 1_1 and 1_2  ***/ 
import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

function App() {
  // hook useState
  const [newTodo, setNewTodo] = useState('');

  return (
    <div>     
      <h1>To do list</h1>
      <TodoList />
      <hr />
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>New Todo: <span>{newTodo}</span></p>
    </div>
  );
}

export default App;