import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/store';
import TodoApp from './components/TodoApp';

ReactDOM.render(
  <TodoApp {...store.getState()} />,
  document.getElementById('root')
);
