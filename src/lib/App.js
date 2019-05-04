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

import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';
import { inject, observer } from "mobx-react/index";

class App extends Component {

  constructor(props) {
    super(props);
    props.uiStore.setPageTitle(this.props.basename.split('/')[1]);
  }

  render() {
    return (
      <BrowserRouter basename={this.props.basename}>
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

export default App = inject('uiStore')(observer(App));
