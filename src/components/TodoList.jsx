import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = React.memo(({ todoList, onRemoveTodo }) => {
  return (
    <div className="task-section">
      <ul>
        {todoList.map(todo => (
          <TodoListItem key={todo.id} id={todo.id} title={todo.title} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </div>
  );
});

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;


