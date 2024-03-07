function TodoList() {
  const todoList = [
    { id: 1, title: 'Create an empty array and store it in a variable called todoList.' },
    { id: 2, title: 'Create at least 3 objects with the required properties.' },
    { id: 3, title: 'Insert a JavaScript expression in the unordered list.' },
    { id: 4, title: 'Create a level one heading.' },
    { id: 5, title: 'Create an ordered list.' },
    { id: 6, title: 'Assign the todoList array in the JavaScript expression.' },
    { id: 7, title: 'Return a list item (<li>) for each object in the array.' },    
  ];

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.id}</strong>: {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
