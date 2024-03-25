import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(), //identificador único temporal
      title: todoTitle
    };
    onAddTodo(newTodo);
    setTodoTitle('');
  };

  return (
    <div>
      <input type="text" value={todoTitle} onChange={handleTitleChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default AddTodoForm;
