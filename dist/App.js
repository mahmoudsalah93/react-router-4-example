var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import { RelativeLink } from 'react-router-relative-links';

import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        BrowserRouter,
        null,
        React.createElement(
          'div',
          { className: 'App' },
          React.createElement(
            'header',
            { className: 'App-header' },
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
                  RelativeLink,
                  { to: './' },
                  'Home'
                ),
                ' '
              ),
              React.createElement(
                'li',
                null,
                ' ',
                React.createElement(
                  RelativeLink,
                  { to: './messages' },
                  'Messages'
                ),
                ' '
              ),
              React.createElement(
                'li',
                null,
                ' ',
                React.createElement(
                  RelativeLink,
                  { to: './about' },
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
              React.createElement(Route, { exact: true, path: match.path + '/', component: Home }),
              React.createElement(Route, { path: match.path + '/messages', component: Messages }),
              React.createElement(Route, { path: match.path + '/about', component: About }),
              React.createElement(Redirect, { to: '/' })
            )
          )
        )
      );
    }
  }]);

  return App;
}(Component);

export default App;