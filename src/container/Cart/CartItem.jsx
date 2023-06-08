import { useState } from 'react';
import { useMyContext } from '../../context/MainContext';
import { convertCurrency } from '../../utils/convertCurrency';
import { Link } from 'react-router-dom';
import { IoAddOutline, IoRemoveOutline, IoClose } from 'react-icons/io5';
import styles from './Cart.module.scss';

const CartItem = ({ item }) => {
    const { currency, removeCartItem } = useMyContext();
    const [quantity, setQuantity] = useState(item.quantity);
    const price = item.price + item.sale;
    const itemTotal = (price * quantity).toFixed(2);

    const handleQuantity = (value) => {
        if (value === 'inc' && quantity < 100) {
            setQuantity((prev) => prev + 1);
        } else if (value === 'dec' && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };
    return (
        <div className={styles['cart-item']}>
            <Link to={`/${item.category}/${item.id}`} className={styles.name}>
                <figure className={styles['img-box']}>
                    <img src={item.url[0]} alt={item.name} />
                </figure>
                <h4>{item.name}</h4>
            </Link>

            <h4 className={styles.price}>
                {convertCurrency(price, currency)}{' '}
                {currency === 'USD' ? '$' : '₼'}
            </h4>

            <h4>{item.selectedColor}</h4>

            <h4>{item.selectedSize}</h4>

            <div className={styles['btn-group']}>
                <button type="button" onClick={() => handleQuantity('dec')}>
                    <IoRemoveOutline />
                </button>
                <input type="number" min="1" max="100" value={quantity} />
                <button type="button" onClick={() => handleQuantity('inc')}>
                    <IoAddOutline />
                </button>
            </div>

            <h4 className={styles['item-total']}>
                {itemTotal} {currency === 'USD' ? '$' : '₼'}
            </h4>

            <button
                className={styles.remove}
                onClick={() => removeCartItem(item.id)}
                type="button"
            >
                <IoClose />
            </button>
        </div>
    );
};
export default CartItem;
