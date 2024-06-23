import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoContainer from './TodoContainer';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Todo List App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todos">App to-do</Link>
              </li>
              <li>
                <Link to="/new">New</Link> 
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/todos" element={<TodoContainer tableName="Default"/>} />
          <Route path="/new" element={<NewTodoList />} /> 
          <Route path="/" element={<Home />} />
        </Routes>

        <footer>
          <p>{new Date().getFullYear()} student Leonard Arrioja</p>
        </footer>
      </div>
    </Router>
  );
};

const Home = () => (
  <>
 <div className="home-container">
    <header>
      <h2>Welcome to the Todo List App</h2>
      <p>This application helps you manage your tasks efficiently using a seamless integration with Airtable. You can add, remove, and sort tasks with ease.</p>
    </header>
    <section>
      <h2>Key Features:</h2>
      <ul className="features">
        <li><strong>Add Tasks:</strong> Quickly add new tasks with a simple form.</li>
        <li><strong>Remove Tasks:</strong> Easily delete tasks you no longer need.</li>
        <li><strong>Sort Tasks:</strong> Toggle between ascending and descending order to organize your tasks.</li>
        <li><strong>Data Synchronization:</strong> Your tasks are automatically saved and updated using Airtable.</li>
      </ul>
    </section>
  </div>
  </>
);

const NewTodoList = () => (
  <>
    <h2>New Todo List</h2>
  </>
);

export default App;
