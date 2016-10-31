import React, { Component } from 'react';
import { store } from '../store/store';

let todoId = 0;

const AddTodo = ({ onAddClick }) => {
  let input;

  return (
    <div>
      <input ref={node => input = node} />
      <button 
        onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            id: todoId++,
            text: input.value
          });
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
