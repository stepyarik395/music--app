import { createStore } from 'redux';

const INITIAL_STATE = {};

const rootreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD__FILM':
      break;

    default:
      return state;
      break;
  }
};

const store = createStore(rootreducer);

export default store;
