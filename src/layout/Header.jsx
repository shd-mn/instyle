import { useState, useEffect } from 'react';
import { links } from '../utils/constants';

import { NavLink, Link } from 'react-router-dom';
import { useMyContext } from '../context/MainContext';
import {
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineMenu,
    AiOutlineClose,
} from 'react-icons/ai';
import { FaShopify } from 'react-icons/fa';
import Search from '../components/Search';
import styles from './Header.module.scss';

function Header() {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [search, setSearch] = useState('');
    const [isSticky, setIsSticky] = useState(false);

    const { cart, wishlist, closeSidebar, showSidebar, isSidebarShow } =
        useMyContext();

    const intersection = () => {
        if (window.scrollY >= window.innerHeight) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', intersection);

        return () => {
            window.removeEventListener('scroll', intersection);
        };
    });

    const handleSearch = () => {
        setIsSearchActive(!isSearchActive);
        closeSidebar();
    };

    const closeSearch = () => {
        setIsSearchActive(false);
        setSearch('');
    };

    return (
        <header
            className={`${styles.header} ${isSticky ? styles.sticky : null}`}
        >
            <div className={styles.container}>
                <Search
                    search={search}
                    setSearch={setSearch}
                    closeSearch={closeSearch}
                    isSearchActive={isSearchActive}
                />
                <div className={styles.navbar}>
                    <Link
                        to="/"
                        className={styles.logo}
                        onClick={() => closeSidebar()}
                    >
                        <FaShopify style={{ fontSize: '4.6rem' }} />
                        <h3>SHOPPING</h3>
                    </Link>

                    <nav>
                        {links.map((item) => (
                            <NavLink
                                key={item.id}
                                className="navlink"
                                to={item.url}
                                onClick={() => closeSidebar()}
                            >
                                {item.text}
                            </NavLink>
                        ))}
                    </nav>

                    <div>
                        <button
                            className={styles['search-btn']}
                            onClick={() => handleSearch()}
                        >
                            <AiOutlineSearch />
                        </button>
                        {isSidebarShow ? (
                            <button
                                className={styles['close-btn']}
                                onClick={() => closeSidebar()}
                            >
                                <AiOutlineClose />
                            </button>
                        ) : (
                            <button
                                className={styles['menu-btn']}
                                onClick={() => showSidebar()}
                            >
                                <AiOutlineMenu />
                            </button>
                        )}
                    </div>
                    <div
                        className={styles.action}
                        onClick={() => closeSidebar()}
                    >
                        <Link to="/account" className={styles.link}>
                            <AiOutlineUser />
                        </Link>
                        <Link to="/wishlist" className={styles.link}>
                            <AiOutlineHeart />
                            <span className="badge">{wishlist.length}</span>
                        </Link>
                        <Link to="/cart" className={styles.link}>
                            <AiOutlineShoppingCart />
                            <span className="badge">{cart.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
