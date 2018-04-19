import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PrTodo from './components/pr-todo/pr-todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo List: React</h1>
        </header>
        <PrTodo />
        <ul>
          <li>HOLA</li>
        </ul>
      </div>
    );
  }
}

export default App;
