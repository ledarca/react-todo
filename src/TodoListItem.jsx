import React from "react";

  const TodoListItem = ({ id, title, onRemoveTodo }) => {

    const handleRemoveTodo = () => {
      onRemoveTodo(id);
    }

  return (
    <li>
      <strong>{title} -- </strong> 
      <button type="button" onClick={handleRemoveTodo}>Remove</button>
    </li>
  );
}

export default TodoListItem;
