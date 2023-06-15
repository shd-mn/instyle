import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

import styles from './Login.module.scss';

const Login = () => {
    return (
        <div className="container">
            <Breadcrumb title="login" />
            <div className={styles.login}>
                <div className={styles['login-header']}>
                    <h2>Login</h2>
                    <p>Enter login detalis to get access</p>
                </div>
                <form className={styles['login-body']}>
                    <div className={styles.fields}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email address"
                        />
                    </div>
                    <div className={styles.fields}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                        />
                    </div>
                    <div className={styles['login-action']}>
                        <div className={styles.checkbox}>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">Keep Me Logged In</label>
                        </div>

                        <Link className="link" to="#">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className={styles['form-footer']}>
                        <div className={styles.sign}>
                            Don't have an account?{' '}
                            <Link className="link" to="/register">
                                {' '}
                                Sign Up
                            </Link>{' '}
                            here
                        </div>
                        <button className={styles['submit-btn']} type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;
