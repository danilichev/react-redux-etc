import React, { Component } from 'react';
import { store } from '../store/store';
import { FilterLink } from './FilterLink';

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
        <input ref={node => this.input = node} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            id: todoId++,
            text: this.input.value
          });
          this.input.value = '';
        }}>
          Add Todo
        </button>
        <ul>
          {visibleTodos.map(todo => 
            <li 
              key={todo.id}
              onClick={() => {
                store.dispatch({
                  type: 'TOGGLE_TODO',
                  id: todo.id
                });
              }}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </li>
          )}
        </ul>
        <p>
          Show: 
          {' '}
          <FilterLink 
            filter="SHOW_ALL" 
            currentFilter={visibilityFilter}
          >
            All
          </FilterLink>
          {' '}
          <FilterLink 
            filter="SHOW_COMPLETED" 
            currentFilter={visibilityFilter}
          >
            Completed
          </FilterLink>
          {' '}
          <FilterLink 
            filter="SHOW_ACTIVE" 
            currentFilter={visibilityFilter}
          >
            Active
          </FilterLink>
        </p>
      </div>
    );
  }
}

export default TodoApp;