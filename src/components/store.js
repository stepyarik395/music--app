import { createStore } from 'redux';

const INITIAL_STATE = {
  some: '33333',
  name: 'loda',
};

const rootreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD__FILM':
      // return console.log('3333');
      break;

    default:
      return state;
      break;
  }
};

const store = createStore(rootreducer);
export default store;
