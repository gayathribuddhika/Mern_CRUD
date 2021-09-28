import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';

import Create from './components/create';
import Edit from './components/edit';
import Main from './components/main';
 
class App extends Component {
  render(){
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to={'/'}>React CRUD Example</Link>
            <div className="collapse navbar-collapse" id = "navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to ={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to ={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to ={'/main'} className="nav-link">Main</Link>
                </li>
              </ul>
            </div>
          </nav>
          <h2>Welcome to REACT CRUD Applicatinon</h2>
          <Switch>
            <Route exact path = "/create" component= {Create}/>
            <Route exact path = "/edit/:id" component= {Edit}/>
            <Route exact path = "/main" component= {Main}/>
          </Switch>
        </div>
      </Router>
      
    )
  }
}


export default App;
