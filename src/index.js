import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './components/todo/todo';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("todo"));
root.render(
  <React.StrictMode>
    <Todo/>
  </React.StrictMode>
)