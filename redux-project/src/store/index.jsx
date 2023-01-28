// const redux = require('redux');
import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return { counter: state.counter + 1 };
  }

  if (action.type === 'DECREMENT') {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
};

store.subscribe(counterSubscriber);

export default store;
