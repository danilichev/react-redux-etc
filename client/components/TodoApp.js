import React, { Component } from 'react';
import { store } from '../store/store';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

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

class TodoApp extends Component {
  render() {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (
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
          todos={visibleTodos}
          onClickTodo={(id) => {
            store.dispatch({
              type: 'TOGGLE_TODO',
              id
            });
          }}
        />
        <Footer 
          visibilityFilter={visibilityFilter}
          onFilterClick={filter => {
            store.dispatch({
              type: 'SET_VISIBILITY_FILTER',
              filter
            });
          }}
        />
      </div>
    );
  }
}

export default TodoApp;