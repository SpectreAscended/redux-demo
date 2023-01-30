// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

import counterSlice from './counter';
import authSlice from './auth';

// WITH CREATE SLICE WE !CAN! MUTATE THE STATE.  When using createSlice in the redux toolkit we can't actually manipulate the existing state, (behind the scenes it does not allow it) so we don't even have to worry about it when using it.  Behind the scenes redux toolkit uses a package called Immer, that will detect code such as state.counter++, which seems to manipulate the existing state and simply clone the existing state, create a new state object, keep all the state which we are not editting and overwrite the state in which we ARE mutating in an immutable way.  This makes it easier for a developer, because we don't need to manage the state we are NOT changing.  We just need to tell it what code to change, and intenally its translated into immutable code.

// We only need to pass action as an argument if we are actually using it, like to pass a payload for example.

// We can pass an object of reducers into our configureStore({ reducer: {counter: counterSlice.reducer, otherReducer: otherReducer.reducer} }) and behind the scenes redux toolkit will combine all of our reducers into one giant one.
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
