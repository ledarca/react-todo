

import React, { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {

  const [todoTitle, setTodoTitle] = React.useState('');

  // new Function
  const handleAddTodo = (event) => {
    // hint
    event.preventDefault();

    const todoTitle = event.target.title.value;

    console.log(todoTitle);

    event.target.reset();

    // last sentence of the part that says app,invoke the onAddTodo
    onAddTodo(todoTitle);

  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" name="title" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
