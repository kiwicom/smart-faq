// @noflow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const translation = require(process.env.TRANSLATION_PATH); // eslint-disable-line import/no-dynamic-require

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

ReactDOM.render(<App locale={translation} />, document.getElementById('root'));
