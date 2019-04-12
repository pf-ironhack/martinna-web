import React, { Component } from 'react';
import './App.css';
import NavBar from './components/misc/NavBar';
import Board from './components/Board';
import { Switch, Route, Redirect } from 'react-router-dom';
import Categories from './components/Categories';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/Profile';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <NavBar/>

        <div>
          <Switch>
            <Route exact path="/" component={Board}/>
            <Route exact path="/categories" component={Categories}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/profile" component={Profile}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
