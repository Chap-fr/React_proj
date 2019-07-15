import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todo-list.component";

//import logo from "./logo.png";


function App() {
  return (
    <Router>
      <div className="container">

        <h1>MERN App</h1>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
          <Link to="/" className="navbar-brand">MERN Stack Todo App</Link>
          <div className="collapse nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
          
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* <Route path="/" exact component={Index} /> */}

        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}




export default App;
