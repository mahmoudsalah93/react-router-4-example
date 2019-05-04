var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, NavLink, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';
import { inject, observer } from "mobx-react/index";

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    props.uiStore.setPageTitle(_this.props.basename.split('/')[1]);
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        BrowserRouter,
        { basename: this.props.basename },
        React.createElement(
          'div',
          { className: 'App' },
          React.createElement(
            'header',
            { className: 'component-app-header' },
            React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
            React.createElement(
              'h1',
              { className: 'App-title' },
              'Welcome to React'
            )
          ),
          React.createElement(
            'div',
            { className: 'menu' },
            React.createElement(
              'ul',
              null,
              React.createElement(
                'li',
                null,
                ' ',
                React.createElement(
                  NavLink,
                  { to: '/' },
                  'Home'
                ),
                ' '
              ),
              React.createElement(
                'li',
                null,
                ' ',
                React.createElement(
                  NavLink,
                  { to: '/messages' },
                  'Messages'
                ),
                ' '
              ),
              React.createElement(
                'li',
                null,
                ' ',
                React.createElement(
                  NavLink,
                  { to: '/about' },
                  'About'
                ),
                ' '
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'App-intro' },
            React.createElement(
              Switch,
              null,
              React.createElement(Route, { exact: true, path: '/', component: Home }),
              React.createElement(Route, { path: '/messages', component: Messages }),
              React.createElement(Route, { path: '/about', component: About }),
              React.createElement(Redirect, { to: '/' })
            )
          )
        )
      );
    }
  }]);

  return App;
}(Component);

export default App = inject('uiStore')(observer(App));