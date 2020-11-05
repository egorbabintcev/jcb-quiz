import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import './index.scss';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  React.createElement(App, React.StrictMode),
  document.querySelector('#root'),
);
/* eslint-enable react/jsx-filename-extension */
