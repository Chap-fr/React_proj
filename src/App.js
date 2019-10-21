import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import CreateTodo from "./TodoApp/components/create-todo.component";
import EditTodo from "./TodoApp/components/edit-todo.component";
import TodosList from "./TodoApp/components/todo-list.component";
import Appli from "./Appgithub/AppGithub";


import logo from "./logo.svg";


function App() {
  return (
    <Router>
      <div className="container">

        

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" target = "_blank" href="https://fr.reactjs.org/">
            <img src={logo} width="30" height="30" alt = "ReactJs.com" />
          </a>

          
       
          <Link to="/" className="navbar-brand">MERN App</Link>

          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
              Listes Appli
            </button>
              <div className="dropdown-menu">
                <a className="dropdown-item">Listes</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item">Créer</a>
              </div>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">

              <li className="navbar-item">
                <Link to="/listes" className="nav-link">Listes</Link>
              </li>
          
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Créer listes</Link>
              </li>

              <li className="navbar-item">
                <Link to="/GitHubApp" className="nav-link">Github App</Link>
              </li>


            </ul>
          </div>
         </nav>

        {/* <Route path="/" exact component={Index} /> */}

        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/listes" component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/GitHubApp" component={Appli} />
      </div>
    </Router>
  );
}

export default App;
