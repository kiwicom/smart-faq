// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import enLocale from '../i18n/en/translation.json';

(() => {
  const root = document.createElement('div');
  root.setAttribute('id', 'root');

  if (!document.body) {
    throw new Error('No browser?');
  }

  document.body.appendChild(root);

  const id = document.getElementById('root');

  if (!id) {
    throw new Error('Root element is missing!');
  }

  ReactDOM.render(
    <App onClose={() => {}} language="en" locale={enLocale} />,
    id,
  );
})();
