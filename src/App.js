import React, { Component } from 'react';
import './reset.css'
import './App.css';
import Nav from './nav/nav'
import Routes from './nav/Routes'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Routes/>        
      </div>
    );
  }
}

export default App;
