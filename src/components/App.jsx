import "./App.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import TodoContainer from './TodoContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route
            path="/" 
            element={ 
              <>
                <header><h1>To do list</h1></header>              
                <main><TodoContainer /></main>
                <footer>&copy; 2024</footer>
              </>
            }
          />
          <Route path="/new" element={<h1>New Todo List</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
