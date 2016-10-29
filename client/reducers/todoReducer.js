function todo(state, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: action.completed
      };
    case 'TOGGLE_TODO':
      return state.id !== action.id ? state : {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  };
}

export default function todoReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [ ...state, todo(null, action) ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  };
}
