import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

let todoId = 0;

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => input = node} />
      <button 
        onClick={() => {
          dispatch({
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

AddTodo = connect()(AddTodo);

export {
  AddTodo
};
