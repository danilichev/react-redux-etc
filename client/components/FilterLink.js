import React from 'react';
import { store } from '../store/store';

const FilterLink = ({ filter, currentFilter, children }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>
  }

  return (
    <a
      href="#" 
      onClick={() => {
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        });
      }}
    >
      {children}
    </a>
  );
};

export {
  FilterLink
};