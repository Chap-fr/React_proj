import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style/App.css';


import CreateTodo from "./TodoApp/components/create-todo.component";
import EditTodo from "./TodoApp/components/edit-todo.component";
import TodosList from "./TodoApp/components/todo-list.component";
import Appli from "./Appgithub/AppGithub";


import logo from "./logo.svg";


function App() {
  return (
    <Router>
      <div className="container" id="navbarId">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
          <a className="navbar-brand" target = "_blank" href="https://fr.reactjs.org/">
            <img src={logo} width="50" height="50" alt = "ReactJs.com" />
          </a>
          <Link to="/" className="navbar-brand">FC</Link>
          <div className="dropdown">
            <button className="btn dropdown-toggle"  type="button" id="dropdownMenuButton" data-toggle="dropdown" >
              Listes App
            </button>
              <div className="dropdown-menu">
                <a className="dropdown-item"><Link to="/listes">Listes</Link></a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item"><Link to="/create">Créer</Link></a>
              </div>
          </div>
          
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/GitHubApp" ><button type="button" class="btn btn-outline-secondary" id="gitButton">Github App</button></Link>
              </li>
            </ul>
          </div>
         </nav>



        <Route path="/listes" component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/GitHubApp" component={Appli} />
      </div>
    </Router>
  );
}

export default App;
