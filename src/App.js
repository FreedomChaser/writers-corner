import React, { Component } from 'react';
import './reset.css'
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Plot from './components/plot/Plot'
import Character from './components/character/Character'
import Home from './components/home/Home'
import Login from './components/login/Login'

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            {/* this route is the login page */}
            <Route exact path='/' component={Login}/>
            <Route path='/character' component={Character}/>
            <Route path='/plot' component={Plot}/>
            <Route path='/Home' component={Home}/>
          </Switch>
        </HashRouter>
        
      </div>
    );
  }
}

export default App;
