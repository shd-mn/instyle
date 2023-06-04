import { useMyContext } from '../../context/MainContext';
import CartItem from './CartItem';
import styles from './Cart.module.scss';
import Breadcrumb from '../../components/Breadcrumb';

const Cart = () => {
    const { cart } = useMyContext();
    return (
        <div className="container">
            <Breadcrumb title={'Cart'} />
            <div className={styles.cart}>
                <div className={styles['table-title']}>
                    <h3>Product</h3>
                    <h3>Price</h3>
                    <h3>Color</h3>
                    <h3>Size</h3>
                    <h3>Quantity</h3>
                    <h3>Total</h3>
                    <h3>remove</h3>
                </div>

                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};
export default Cart;
