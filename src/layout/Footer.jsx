import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterest,
} from 'react-icons/fa';

const Footer = () => {
    const [subscribe, setSubscribe] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        reset({ email: '' });
        setSubscribe(true);
    };
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.content}`}>
                <div className={styles.logo}>
                    <h1>Logo</h1>
                    <p>
                        Lorem ipsum dolor sit amet, adipisicing elit. Harum
                        doloribus, cum sed consequuntur totam optio.
                    </p>
                    <p>(+994) 00 000-00-00</p>
                    <p>info@example.com</p>
                </div>
                <ul className={styles.quick}>
                    <li>
                        <h3>QUICK</h3>
                    </li>
                    <li>
                        <Link to="./women">Women</Link>
                    </li>
                    <li>
                        <Link to="./men">Men</Link>
                    </li>
                    <li>
                        <Link to="./children">Children</Link>
                    </li>
                    <li>
                        <Link to="./news">News</Link>
                    </li>
                </ul>
                <ul className={styles.account}>
                    <li>
                        <h3>ACCOUNT</h3>
                    </li>
                    <li>
                        <Link>My Account</Link>
                    </li>
                    <li>
                        <Link to="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link>Orders Tracking</Link>
                    </li>
                </ul>
                <ul className={styles.newsletter}>
                    <li>
                        <h3>NEWSLETTER</h3>
                    </li>
                    <form
                        className={styles.subscribe}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            name="email"
                            placeholder="Email"
                            {...register('email', {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                            })}
                        />
                        {errors.email?.type === 'required' && (
                            <p role="alert">Email Address is required</p>
                        )}
                        {errors.email?.type === 'pattern' && (
                            <p role="alert">Email Address is not valid</p>
                        )}

                        <button type="submit">SUBSCRIBE</button>
                    </form>

                    <li className={styles.social}>
                        <Link>
                            <span>
                                <FaFacebookF />
                            </span>
                        </Link>
                        <Link>
                            <span>
                                <FaTwitter />
                            </span>
                        </Link>
                        <Link>
                            <span>
                                <FaInstagram />
                            </span>
                        </Link>
                        <Link>
                            <span>
                                <FaPinterest />
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
export default Footer;
