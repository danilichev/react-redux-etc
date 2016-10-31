import React, { Component } from 'react';

const Todo = ({ text, completed, onClick }) => (
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
  </li>
);

const TodoList = ({ todos, onClickTodo}) => (
  <ul>
    {todos.map(todo => 
      <Todo 
        key={todo.id}
        {...todo}
        onClick={() => onClickTodo(todo.id)}
      />   
    )}
  </ul>
);

export {
  TodoList
};