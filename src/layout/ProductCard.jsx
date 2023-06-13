import { convertCurrency } from '../utils/convertCurrency';
import { useMyContext } from '../context/MainContext';
import { Link } from 'react-router-dom';
import {
    IoResizeOutline,
    IoHeartOutline,
    IoCartOutline,
} from 'react-icons/io5';
import styles from './ProductCard.module.scss';
import { StarRating } from '../components/StarRating';
import { useCartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { id, name, category, price, sale, url, rating } = product;
    const { currency, wishlist, toggleWishlist, openModal } = useMyContext();
    const { cart, toggleCart } = useCartContext();
    const hasCart = cart.some((item) => item.id === product.id);
    const hasWishlist = wishlist.some((item) => item.id === product.id);

    return (
        <article className={styles['product-card']}>
            <figure className={styles['img-box']}>
                <img src={url[0]} alt={name} />
                <div className={styles['button-group']}>
                    <button
                        className={styles.btn}
                        type="button"
                        onClick={() => openModal(product)}
                    >
                        <IoResizeOutline />
                    </button>
                    <button
                        className={`${styles.btn} ${
                            hasWishlist && styles.active
                        }`}
                        type="button"
                        onClick={(e) => toggleWishlist(e, product)}
                    >
                        <IoHeartOutline />
                    </button>
                    <button
                        className={`${styles.btn} ${hasCart && styles.active}`}
                        type="button"
                        onClick={(e) => toggleCart(e, product)}
                    >
                        <IoCartOutline />
                    </button>
                </div>

                <div className={styles.badge}>
                    {product.new === true && (
                        <span className={styles.new}>NEW</span>
                    )}
                    {sale !== 0 && <span className={styles.sale}>SALE</span>}
                </div>
            </figure>
            <Link to={`/${category}/${id}`}>
                <div className={styles['product-text-box']}>
                    <h5>{name}</h5>
                    <div className={styles.info}>
                        {<StarRating stars={rating} />}
                        <p className={styles['product-price']}>
                            {sale < 0 && (
                                <span className={styles.sale}>
                                    {convertCurrency(price, currency)}
                                </span>
                            )}

                            {convertCurrency(price + sale, currency)}
                        </p>
                    </div>
                </div>
            </Link>
        </article>
    );
};
export default ProductCard;
