const TodoListItem = ({ id, title }) => {
  // Desestructurar props
  // Pude colocar cualquier valor prop

  return (
    <li>
      <strong>{title}</strong> 
    </li>
  );
}

export default TodoListItem;

