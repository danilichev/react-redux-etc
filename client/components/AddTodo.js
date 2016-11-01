import React, { PropTypes } from 'react';

let todoId = 0;

const AddTodo = (props, { store }) => {
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

AddTodo.contextTypes = {
  store: PropTypes.object
};

export default AddTodo;
