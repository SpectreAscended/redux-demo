const redux = require('redux');

// Reducer function - Should be a pure function.  Same input leads to the same output.  There should be no side effects, so no writing to local storage, making an api call etc...
// Inputs: Old State + Dispatched Action  ---> Output: New state object.

// .getState() is a method in store and will give us the latest state snapshop after it was updated.

// subscribe() is a method in store that we use to execute our subscriber function that, here, we define as counterSubscriber.

// dispatch() - We give this an object with a type.  In its simplest form, that is all we need to give it.  Similar to useReducer.

// Our reducer runs once when it is initialized, and again when we dispatch an action to it.

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT' });
