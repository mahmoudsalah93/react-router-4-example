import React from 'react';

var Message = function Message(_ref) {
  var match = _ref.match;
  return React.createElement(
    'h3',
    null,
    'Message with ID ',
    match.params.id
  );
};

export default Message;