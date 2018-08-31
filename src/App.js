import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomHeader from './components/header';
import Body from './components/body';

class App extends Component {
  state = {
    heading: 'Bhupender'
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Body />
        <CustomHeader>{this.state.heading}</CustomHeader>
      </div>
    );
  }
}

export default App;
