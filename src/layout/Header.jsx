import React from 'react';
import { FaShopify } from 'react-icons/fa';
import {
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineHeart,
    AiOutlineShoppingCart,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <nav className={`${styles.navbar}`}>
                <a href="/" className={styles.logo}>
                    <FaShopify style={{ fontSize: '4.6rem' }} />
                    <h3>SHOPPING</h3>
                </a>
                <div className="main-navigation">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/women">Women</NavLink>
                </div>
                <div className={styles['header-action']}>
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
                    <p>$0.00</p>
                </div>
            </nav>
        </header>
    );
}

export default Header;
