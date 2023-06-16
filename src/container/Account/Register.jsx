import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

import styles from './Sign.module.scss';

const Register = () => {
    return (
        <div className="container">
            <Breadcrumb title="register" />
            <div className={styles.sign}>
                <div className={styles['sign-header']}>
                    <h2>Sign In</h2>
                    <p>Create your account to get full access</p>
                </div>
                <form className={styles['sign-body']}>
                    <div className={styles.fields}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter full name"
                        />
                    </div>
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
                            placeholder="Enter Password"
                        />
                    </div>
                    <div className={styles.fields}>
                        <label htmlFor="password">Confirm Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Confirm Password"
                        />
                    </div>
                    <div className={styles['form-footer']}>
                        <div className={styles.account}>
                            Already have an account?{' '}
                            <Link className="link" to="/login">
                                {' '}
                                Login
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
export default Register;
