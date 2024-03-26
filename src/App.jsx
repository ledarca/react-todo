import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]); 

  return (
    <div>
      <h1>To do list</h1>
      <AddTodoForm onAddTodo={(newTodo) => setTodoList([...todoList, newTodo])/*spread operator/*/} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;

