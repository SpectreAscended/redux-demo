import { createStore } from 'redux';

const initialState = {
  counter: 0,
  showCounter: false,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...state, counter: state.counter + 1 };
    }

    case 'DECREMENT': {
      return { ...state, counter: state.counter - 1 };
    }

    case 'INCREASE': {
      return { ...state, counter: state.counter + action.value };
    }

    case 'TOGGLE': {
      return { ...state, showCounter: !state.showCounter };
    }

    default: {
      return state;
    }
  }
};

const store = createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
};

store.subscribe(counterSubscriber);

export default store;
