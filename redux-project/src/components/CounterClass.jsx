import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Counter.module.css';
import store from '../store';

// When we use 'connect' we wrap use it in our export statement.  It is a higher order function, so it looks kind of wierd.  export default connect(mapStateToProps, mapDispatchToProps)(CounterClass).  This is an alternative to using the useSelector and useDispatch hooks.  We pass a function, mapStateToProps and a function mapDispatchToProps into connect.

// mapStateToProps - this is a function that takes our state as an argument and returns an object with a name for our state in as a key, and the state.ourStateElement as a value {counter: state.counter}

// mapDispatchToProps - this is a function that takes dispatch as an argument and returns an object with our functions for dispatching the actions. increment => dispatch({'type': 'INCREMENT'})

// This passes these functions (in connect) down into our component through this.props.

// in our class we pass our dispatch functions into methods we define using this.props.increment();

// We attach a pointer to these methods in our jsx making sure to use .bind(this) to bind 'this'. to the class, and not the click event that is calling them.

class CounterClass extends Component {
  constructor() {
    super();
  }

  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
