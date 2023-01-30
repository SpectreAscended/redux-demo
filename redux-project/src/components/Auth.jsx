import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const submitLoginHandler = e => {
    e.preventDefault();
    dispatch(authActions.logIn());
  };

  console.log(isAuthenticated);

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitLoginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
