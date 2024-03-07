import "./App.css";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  return (
    <div>
      <h1>To do list</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;