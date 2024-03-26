import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList }) {
  return (
    <div>
      <ul>
        {todoList.map((todo) => ( <TodoListItem key={todo.id} title={todo.title} />))}
      </ul>
    </div>
  );
}

export default TodoList;

