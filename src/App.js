import React, { Component } from 'react';
import './App.css';
import NavBar from './components/misc/NavBar';
import Board from './components/Board';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Board />
      </div>
    );
  }
}

export default App;
