import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';

const app = document.getElementById('app');
app.textContent = 'Hello World';

const render = () => {
  ReactDOM.render(<App />, app)
}

if (app) render();

if (module.hot) module.hot.accept();