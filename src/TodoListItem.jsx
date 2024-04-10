import React from "react";

  const TodoListItem = ({todo, onRemoveTodo }) => {
    const{id, title} = todo;

    const handleRemoveTodo = () => {
      onRemoveTodo(id);
    }

  return (
    <li>
      <strong>{title}</strong> 
      <button type="button" onClick={handleRemoveTodo}>Remove</button>
    </li>
  );
}

export default TodoListItem;

