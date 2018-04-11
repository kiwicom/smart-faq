// @noflow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import enLocale from '../i18n/en/translation.json';

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

ReactDOM.render(
  <App onClose={() => {}} language="en" locale={enLocale} />,
  document.getElementById('root'),
);
