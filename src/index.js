import React from 'react';
import ReactDOM from 'react-dom';
import store from 'src/Stores';
import App from 'src/components/App';
import './index.scss';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  (
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  ),
  document.querySelector('#root'),
);
/* eslint-enable react/jsx-filename-extension */
