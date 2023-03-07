import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TodosProvider } from './context/todos-context';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodosProvider>
    <App />
  </TodosProvider>
);
