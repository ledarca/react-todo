import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';

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
      <form> 
        <InputWithLabel label="Title:" value={todoTitle} onChange={handleTitleChange} autoFocus={true}/>
        <button type="button" onClick={handleAddTodo}>Add Todo</button>
      </form>  
    </div>
  );
}

export default AddTodoForm;

