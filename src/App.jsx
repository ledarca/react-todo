import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const todoList = [
    { id: 1, title: 'Create an empty array and store it in a variable called todoList' },
    { id: 2, title: 'Create at least 3 objects with the required properties' },
    { id: 3, title: 'Insert a JavaScript expression in the unordered list' },
    { id: 4, title: 'Create a level one heading' },
    { id: 5, title: 'Create an ordered list' },
    { id: 6, title: 'Assign the todoList array in the JavaScript expression' },
    { id: 7, title: 'Return a list item (<li>) for each object in the array' },    
  ];

  return (
    <div>
      <h1>To do list</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.id}</strong>: {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

  export default App
