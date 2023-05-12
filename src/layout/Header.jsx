import React from 'react';
import { FaShopify } from 'react-icons/fa';
import {
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineHeart,
    AiOutlineShoppingCart,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <nav className="navbar container">
                <a href="/" className="logo">
                    <FaShopify style={{ fontSize: '4.6rem' }} />
                    <h3>SHOPPING</h3>
                </a>
                <div className="main-navigation">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to='/women'>Women</NavLink>
                </div>
                <div className="header-icon-area">
                    <a href="/" className="link" >
                        <AiOutlineSearch
                            style={{ fontSize: '3.2rem', color: '#3f3f3f' }}
                        />
                    </a>
                    <a href="/account" className="link" >
                        <AiOutlineUser
                            style={{ fontSize: '3.2rem', color: '#3f3f3f' }}
                        />
                    </a>
                    <a href="/wishlist" className="link" >
                        <AiOutlineHeart
                            style={{ fontSize: '3.2rem', color: '#3f3f3f' }}
                        />
                        <span className="badge">0</span>
                    </a>
                    <a href="/cart" className="link" >
                        <AiOutlineShoppingCart
                            style={{ fontSize: '3.2rem', color: '#3f3f3f' }}
                        />
                        <span className="badge">0</span>
                    </a>
                    <p>$0.00</p>
                </div>
            </nav>
        </header>
    );
}

export default Header;
