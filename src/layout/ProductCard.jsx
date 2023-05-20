import { convertCurrency } from '../utils/convertCurrency';
import { useMyContext } from '../context/MainContext';
import {
    IoResizeOutline,
    IoHeartOutline,
    IoCartOutline,
} from 'react-icons/io5';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
    const { name, price, sale, url } = product;
    const { currency, cart, toggleCart } = useMyContext();
    const hasCart = cart.some((item) => item.id === product.id);

    return (
        <article className={styles['product-card']}>
            <figure className={styles['img-box']}>
                <img src={url[0]} alt={name} />
                <div className={styles['button-group']}>
                    <button
                        className={`${styles.btn} ${hasCart && styles.active}`}
                        type="button"
                        onClick={(e) => toggleCart(e, product)}
                    >
                        <IoCartOutline size={'20px'} />
                    </button>
                    <button className={styles.btn} type="button">
                        <IoHeartOutline size={'20px'} />
                    </button>
                    <button className={styles.btn} type="button">
                        <IoResizeOutline size={'20px'} />
                    </button>
                </div>
                {sale !== 0 && (
                    <div className={styles.badge}>{sale.toFixed(2)}</div>
                )}
            </figure>
            <div className={styles['product-text-box']}>
                <h5>{name}</h5>
                <p className={styles['product-price']}>
                    {sale < 0 && (
                        <span> {convertCurrency(price, currency)}</span>
                    )}

                    {convertCurrency(price + sale, currency)}
                    {currency === 'USD' ? '$' : '₼'}
                </p>
            </div>
        </article>
    );
};
export default ProductCard;
