import { useState } from 'react';
import { FaShopify } from 'react-icons/fa';
import {
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineMenu,
    AiOutlineClose,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

function Header() {
    const [showMobileNav, setShowMobileNav] = useState(false);
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <a href="/" className={styles.logo}>
                        <FaShopify style={{ fontSize: '4.6rem' }} />
                        <h3>SHOPPING</h3>
                    </a>
                </div>
                <div
                    className={`${
                        showMobileNav ? styles['mobile-navbar'] : styles.navbar
                    }`}
                >
                    <nav className={styles.menu}>
                        <NavLink className="navlink" to="/">
                            Home
                        </NavLink>
                        <NavLink className="navlink" to="/women">
                            Women
                        </NavLink>
                        <NavLink className="navlink" to="/men">
                            Men
                        </NavLink>
                        <NavLink className="navlink" to="/baby">
                            Baby Collection
                        </NavLink>
                        <NavLink className="navlink" to="/blog">
                            Blog
                        </NavLink>
                    </nav>
                    <div className={styles.action}>
                        <a href="/" className={styles.link}>
                            <AiOutlineSearch
                                style={{ fontSize: '2.4rem', color: '#3f3f3f' }}
                            />
                        </a>
                        <a href="/account" className={styles.link}>
                            <AiOutlineUser
                                style={{ fontSize: '2.4rem', color: '#3f3f3f' }}
                            />
                        </a>
                        <a href="/wishlist" className={styles.link}>
                            <AiOutlineHeart
                                style={{ fontSize: '2.4rem', color: '#3f3f3f' }}
                            />
                            <span className={styles.badge}>0</span>
                        </a>
                        <a href="/cart" className={styles.link}>
                            <AiOutlineShoppingCart
                                style={{ fontSize: '2.4rem', color: '#3f3f3f' }}
                            />
                            <span className={styles.badge}>0</span>
                        </a>
                        <button
                            className={`${styles.btn} ${styles['close-btn']}`}
                            onClick={() => setShowMobileNav(false)}
                        >
                            <AiOutlineClose
                                style={{
                                    fontSize: '2.8rem',
                                    color: '#3f3f3f',
                                }}
                            />
                        </button>
                    </div>
                </div>
                <button
                    className={styles.btn}
                    onClick={() => setShowMobileNav(true)}
                >
                    <AiOutlineMenu
                        style={{ fontSize: '2.4rem', color: '#3f3f3f' }}
                    />
                </button>
            </div>
        </header>
    );
}

export default Header;
