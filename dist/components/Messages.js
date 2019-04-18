function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React from 'react';

import Message from './Message';

import { Link, Route, Switch } from 'react-router-dom';

var Messages = function Messages(_ref) {
  var match = _ref.match;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'ul',
      null,
      [].concat(_toConsumableArray(Array(5).keys())).map(function (n) {
        return React.createElement(
          'li',
          { key: n },
          React.createElement(
            Link,
            { to: match.url + '/' + (n + 1) },
            'Message ',
            n + 1
          )
        );
      })
    ),
    React.createElement(
      Switch,
      null,
      React.createElement(Route, { path: match.url + '/:id(\\d+)', component: Message }),
      React.createElement(Route, {
        path: match.url,
        render: function render() {
          return React.createElement(
            'h3',
            null,
            'Please select a message'
          );
        }
      })
    )
  );
};

export default Messages;