import React from "react";
import PropTypes from 'prop-types';
import styles from './TodoListItem.module.css'; // Import the CSS module

const TodoListItem = ({ id, title, onRemoveTodo }) => {

  const handleRemoveTodo = () => {
    onRemoveTodo(id);
  };

  return (
    <li className={styles.todoItem}> 
      <h2>{title}</h2>
      <button type="button" onClick={handleRemoveTodo} className="remove-task">Remove</button>
    </li>
  );
};

TodoListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoListItem;

