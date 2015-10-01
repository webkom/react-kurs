import 'babel/polyfill';
import 'todomvc-app-css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);