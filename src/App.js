import React, { Component } from 'react';
import './App.css';
import NavBar from './components/misc/NavBar';
import Board from './components/Board';
import { Switch, Route, Redirect } from 'react-router-dom';
import Categories from './components/Categories';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <NavBar/>

        <div>
          <Switch>
            <Route exact path="/" component={Board}/>
            <Route exact path="/categories" component={Categories}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
