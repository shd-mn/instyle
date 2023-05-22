import { useMyContext } from '../../context/MainContext';
import CartItem from './CartItem';
import styles from './Cart.module.scss';
import Breadcrumb from '../../components/Breadcrumb';

const Cart = () => {
    const { cart } = useMyContext();
    return (
        <div className="container">
            <Breadcrumb title={'Cart'} />
            <table className={styles.list}>
                <thead className={styles['list-header']}>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </table>
        </div>
    );
};
export default Cart;
