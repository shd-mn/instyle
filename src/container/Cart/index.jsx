import { useEffect, useState } from 'react';
import { useMyContext } from '../../context/MainContext';
import { useCartContext } from '../../context/CartContext';
import { convertCurrency } from '../../utils/convertCurrency';
import CartItem from './CartItem';
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import styles from './Cart.module.scss';

const Cart = () => {
    const { currency } = useMyContext();
    const { cart, subtotal, clearCart, updateCart } = useCartContext();

    const [newCart, setNewCart] = useState([]);

    const fee = Number((1.2 * cart.length).toFixed(3));
    const total = fee + subtotal;

    const handleQuantity = (id, quantity) => {
        setNewCart(
            newCart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    useEffect(() => {
        setNewCart(cart);
    }, [cart]);

    return (
        <div className="container">
            <Breadcrumb title={'Cart'} />
            <div className={styles.cart}>
                {cart.length === 0 ? (
                    <div className={styles.empty}>
                        <h3>Your cart is empty</h3>
                        <Link to="/women">Continue Shopping</Link>
                    </div>
                ) : (
                    <div className={styles['table-title']}>
                        <h4>PRODUCT</h4>
                        <h4>PRICE</h4>
                        <h4>COLOR</h4>
                        <h4>SIZE</h4>
                        <h4>QUANTITY</h4>
                        <h4>SUBTOTAL</h4>
                        <h4>{''}</h4>
                    </div>
                )}

                {cart.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        handleQuantity={handleQuantity}
                    />
                ))}

                {cart.length > 0 && (
                    <>
                        <div className={styles['cart-action']}>
                            <button
                                className={styles.clear}
                                type="button"
                                onClick={clearCart}
                            >
                                Clear shopping cart
                            </button>
                            <button
                                className={styles.update}
                                type="button"
                                onClick={() => updateCart(newCart)}
                            >
                                Update Cart
                            </button>
                        </div>

                        <div className={styles['order-summary']}>
                            <div>
                                <h4>
                                    Subtotal :
                                    {convertCurrency(subtotal, currency)}
                                </h4>
                                <h4>
                                    Shipping Fee :
                                    {convertCurrency(fee, currency)}
                                </h4>
                                <p></p>
                                <h3>
                                    Order Total :{' '}
                                    {convertCurrency(total, currency)}
                                </h3>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
export default Cart;
