import { links } from '../utils/constants';

import { NavLink, Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import {
    AiOutlineUser,
    AiOutlineHeart,
    AiOutlineShoppingCart,
} from 'react-icons/ai';
import { useMyContext } from '../context/MainContext';
import { useCartContext } from '../context/CartContext';

const Sidebar = () => {
    const { wishlist, isSidebarShow, closeSidebar } = useMyContext();
    const { cart } = useCartContext();

    return (
        <>
            <div
                className={`${styles.sidebar} ${
                    isSidebarShow ? styles.show : null
                }`}
            >
                <div className={styles.action} onClick={() => closeSidebar()}>
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
            </div>
            {isSidebarShow && (
                <div
                    className={styles.overlay}
                    onClick={() => closeSidebar()}
                ></div>
            )}
        </>
    );
};
export default Sidebar;
