'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = new String('*{font-family:Roboto;}div.Layout span.name{color:blue;}');
style.__hash = '76748467';
style.__scoped = '*.jsx-4212418802{font-family:Roboto;}div.Layout.jsx-4212418802 span.name.jsx-4212418802{color:blue;}';
style.__scopedHash = '4212418802';

var Layout = function Layout() {
  return React.createElement(
    'div',
    {
      className: 'jsx-' + style.__scopedHash + ' ' + 'Layout'
    },
    'Aloha, I am a ',
    React.createElement(
      'span',
      {
        className: 'jsx-' + style.__scopedHash + ' ' + 'name'
      },
      'Layout'
    ),
    React.createElement(_style2.default, {
      styleId: style.__scopedHash,
      css: style.__scoped
    })
  );
};

exports.default = Layout;