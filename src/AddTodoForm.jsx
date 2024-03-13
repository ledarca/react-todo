/* function AddTodoForm() 
{
  return (
    <form>
      <label htmlFor="todoTitle">Title:</label>
      <input type="text" id="todoTitle" />
      <button type="submit">Add</button>
    </form>
  );
}
export default AddTodoForm; ***1_1 and 1_2 class, start, last part***/

import React, { useState } from 'react';

const AddTodoForm = (props) => {

  const { onAddTodo } = props;

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
