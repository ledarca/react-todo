import React from "react";
import styles from './TodoListItem.module.css'; // Import the CSS module

  const TodoListItem = ({ id, title, onRemoveTodo }) => {

    const handleRemoveTodo = () => {
      onRemoveTodo(id);
    }

  return (
    <li className={styles.todoItem}> 
      <h2>{title}</h2>
      <button type="button" onClick={handleRemoveTodo} className="remove-task">Remove</button>
    </li>
  );
}

export default TodoListItem;
