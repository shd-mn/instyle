import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

import styles from './Sign.module.scss';

const Login = () => {
    return (
        <div className="container">
            <Breadcrumb title="login" />
            <div className={styles.sign}>
                <div className={styles['sign-header']}>
                    <h2>Login</h2>
                    <p>Enter login details to get access</p>
                </div>
                <form className={styles['sign-body']}>
                    <div className={styles.fields}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email address"
                        />
                    </div>
                    <div className={styles.fields}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className={styles['sign-action']}>
                        <div className={styles.checkbox}>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">Keep Me Logged In</label>
                        </div>

                        <Link className="link" to="#">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className={styles['form-footer']}>
                        <div className={styles.account}>
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
