import { convertCurrency } from '../utils/convertCurrency';
import { useMyContext } from '../context/MainContext';
import {
    IoResizeOutline,
    IoHeartOutline,
    IoCartOutline,
} from 'react-icons/io5';
import styles from './ProductCard.module.scss';

const addToCart = (e) => {
    e.preventDefault();
};

const ProductCard = ({ product }) => {
    const { currency } = useMyContext();
    return (
        <article className={styles['product-card']}>
            <figure className={styles['img-box']}>
                <img src={product.url[2]} alt={product.name} />
                <div className={styles['button-group']}>
                    <button
                        className={styles.btn}
                        type="button"
                        onClick={(e) => addToCart(e)}
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
                {product.sale !== 0 && (
                    <div className={styles.badge}>
                        {product.sale.toFixed(2)}
                    </div>
                )}
            </figure>
            <div className={styles['product-text-box']}>
                <h5>{product.name}</h5>
                <p className={styles['product-price']}>
                    <span>{convertCurrency(product.price, currency)}</span>
                    {convertCurrency(product.price - product.sale, currency)}
                    {currency === 'USD' ? '$' : '₼'}
                </p>
            </div>
        </article>
    );
};
export default ProductCard;
