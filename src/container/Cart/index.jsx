import { useMyContext } from '../../context/MainContext';
import CartItem from './CartItem';
import styles from './Cart.module.scss';
import Breadcrumb from '../../components/Breadcrumb';

const Cart = () => {
    const { cart, clearCart } = useMyContext();
    return (
        <div className="container">
            <Breadcrumb title={'Cart'} />
            <div className={styles.cart}>
                {cart.length === 0 ? (
                    <h3 className={styles.empty}>Your cart is empty</h3>
                ) : (
                    <div className={styles['table-title']}>
                        <h3>Product</h3>
                        <h3>Price</h3>
                        <h3>Color</h3>
                        <h3>Size</h3>
                        <h3>Quantity</h3>
                        <h3>Total</h3>
                        <h3>{''}</h3>
                    </div>
                )}

                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}

                {cart.length !== 0 && (
                    <button type="button" onClick={() => clearCart()}>
                        Clear shopping cart
                    </button>
                )}
            </div>
        </div>
    );
};
export default Cart;
