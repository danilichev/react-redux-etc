import React, { Component } from 'react';
import { store } from '../store/store';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { Footer } from './Footer';

let todoId = 0;

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
  };
};

const TodoApp = ({ todos, visibilityFilter }) => (
  <div className="todo-app">
    <AddTodo 
      onAddClick={(text) => {
        store.dispatch({
          type: 'ADD_TODO',
          id: todoId++,
          text
        });
      }}
    />        
    <TodoList 
      todos={getVisibleTodos(todos, visibilityFilter)}
      onClickTodo={(id) => {
        store.dispatch({
          type: 'TOGGLE_TODO',
          id
        });
      }}
    />
    <Footer />
  </div>
);

export default TodoApp;