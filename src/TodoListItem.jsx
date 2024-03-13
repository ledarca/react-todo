const TodoListItem = ({ props }) => {
//first part
  return (
    <li>
      <strong>ID:</strong> {props.id} 
      <strong>Title:</strong> {props.title}
      <hr />
    </li>
  );
}

export default TodoListItem;
