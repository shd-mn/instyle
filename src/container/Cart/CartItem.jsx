import { useState } from 'react';
import { useMyContext } from '../../context/MainContext';
import { useCartContext } from '../../context/CartContext';
import { convertCurrency } from '../../utils/convertCurrency';
import { Link } from 'react-router-dom';
import { IoAddOutline, IoRemoveOutline, IoClose } from 'react-icons/io5';
import styles from './Cart.module.scss';

const CartItem = ({ item, handleQuantity }) => {
    const { currency } = useMyContext();
    const { removeCartItem } = useCartContext();
    const [inputValue, setInputValue] = useState(item.quantity);
    const price = item.price + item.sale;
    const itemTotal = price * inputValue;

    const handleInput = (value) => {
        if (value === 'inc' && inputValue < 100) {
            setInputValue((prev) => prev + 1);
            handleQuantity(item.id, inputValue + 1);
        } else if (value === 'dec' && inputValue > 1) {
            setInputValue((prev) => prev - 1);
            handleQuantity(item.id, inputValue - 1);
        } else if (value === 'dec' && inputValue <= 1) {
            removeCartItem(item.id);
        }
    };

    const handleChange = (e) => {
        setInputValue(+e.target.value);
        handleQuantity(item.id, +e.target.value);
    };

    return (
        <div className={styles['cart-item']}>
            <Link to={`/${item.category}/${item.id}`} className={styles.name}>
                <figure className={styles['img-box']}>
                    <img src={item.url[0]} alt={item.name} />
                </figure>
                <h4>{item.name}</h4>
            </Link>

            <h4 className={styles.price}>{convertCurrency(price, currency)}</h4>

            <h4>{item.selectedColor}</h4>

            <h4>{item.selectedSize}</h4>

            <div className={styles['btn-group']}>
                <button type="button" onClick={() => handleInput('dec')}>
                    <IoRemoveOutline />
                </button>
                <input
                    type="number"
                    min="1"
                    max="100"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button type="button" onClick={() => handleInput('inc')}>
                    <IoAddOutline />
                </button>
            </div>

            <h4 className={styles['item-total']}>
                {convertCurrency(itemTotal, currency)}
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
