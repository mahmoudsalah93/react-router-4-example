import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  NavLink,
  Switch,
  Redirect,
  BrowserRouter
} from 'react-router-dom';

import { RelativeLink } from 'react-router-relative-links';


import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/#/operationsManager">
      <div className="App">
        <header className="component-app-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="menu">
          <ul>
            <li> <NavLink to="/">Home</NavLink> </li>
            <li> <NavLink to="/messages">Messages</NavLink> </li>
            <li> <NavLink to="/about">About</NavLink> </li>
          </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
