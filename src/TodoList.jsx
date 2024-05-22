import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div className='task-section'>
      <ul>
        {todoList.map((todo) => ( 
          <TodoListItem key={todo.id} title={todo.title} onRemoveTodo={() => onRemoveTodo(todo.id)}/>
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
