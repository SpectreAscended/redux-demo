import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

// We import useSelector from react-redux.  This allows us to use a slice of our store.  If we were using class based components we would import 'connect' instead.  This connect function can be used as a wrapper around the function we want to use our store in.

// in useSelector we pass in a function which returns the property we want to get out of our store.
// const counter = useSelector(state => state.counter)

// When you set up a useSelector, react-redux will automatically set up a subscription to the redux store for this component.  This component will recieve the latest snapshot and update automatically whenever that data changes in the redux store. -- If this component were to unmount, react-redux would also automatically clear the subscription.

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'INCREASE', value: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
