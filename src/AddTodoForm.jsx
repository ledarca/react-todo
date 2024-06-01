import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault(); // Prevent Default Form Behavior
    const newTodo = {
      id: Date.now(), //Temporary Unique Identifier
      title: todoTitle
    };
    onAddTodo(newTodo);
    setTodoTitle('');
  };

  return (
    <form onSubmit={handleAddTodo} className='input-section'>
      <InputWithLabel id={todoTitle} value={todoTitle} onChange={handleTitleChange} ></InputWithLabel>
      <button type="submit" id="add-task" className="plus-icon">Add</button>
    </form>
  );
}

export default AddTodoForm;
