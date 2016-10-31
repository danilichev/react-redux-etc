import React, { Component } from 'react';
import { store } from '../store/store';
import VisibleTodoList from '../containers/VisibleTodoList';
import AddTodo from './AddTodo';
import { Footer } from './Footer';

const TodoApp = ({ todos, visibilityFilter }) => (
  <div className="todo-app">
    <AddTodo />        
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;