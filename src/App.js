import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style/App.css';


import CreateTodo from "./TodoApp/components/create-todo.component";
import EditTodo from "./TodoApp/components/edit-todo.component";
import TodosList from "./TodoApp/components/todo-list.component";
import Appli from "./Appgithub/AppGithub";
import StarGame from "./GameStar/starMatch";


import logo from "./images/logo.svg";


function App() {
  return (
    <Router>
        
        <nav className="navbar fixed-top navbar-dark bg-dark" >
          <a className="navbar-brand" id="reactlog" target = "_blank" href="https://fr.reactjs.org/">
            <img src={logo} width="50" height="50" alt = "ReactJs.com" />
          </a>
          <Link to="/" className="navbar-brand" id="name">FC</Link>
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
          
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/GitHubApp" ><button type="button" class="btn btn-outline-secondary" id="btnNav">Github App</button></Link>
              <Link to="/StarGame" ><button type="button" class="btn btn-outline-secondary" id="btnNav">Game App</button></Link>
              </li>
            </ul>

            </nav>
            <div className="container">
              <Route path="/listes" component={TodosList} />
              <Route path="/edit/:id" component={EditTodo} />
              <Route path="/create" component={CreateTodo} />
              <Route path="/GitHubApp" component={Appli} />
              <Route path="/StarGame" component={StarGame} />
            </div>
           
    </Router>
  );
}

export default App;
