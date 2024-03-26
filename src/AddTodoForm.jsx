import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    const newTodo = {
      id: Date.now(), //identificador único temporal
      title: todoTitle
    };
    onAddTodo(newTodo);
    setTodoTitle('');
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}> 
        <label htmlFor="todoTitle">Fill: </label>
        <input type="text" id="todoTitle" name="todoTitle" value={todoTitle} onChange={handleTitleChange} required/>
        <button type="submit">Add Todo</button>
      </form>  
    </div>
  );
}

export default AddTodoForm;

