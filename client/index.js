import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/store';
import TodoApp from './components/TodoApp';

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById('root')
  );
};

store.subscribe(render);
render();
