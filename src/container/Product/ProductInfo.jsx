import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { convertCurrency } from '../../utils/convertCurrency';
import { useMyContext } from '../../context/MainContext';
import { StarRating } from '../../components/StarRating';
import Breadcrumb from '../../components/Breadcrumb';
import ImageGalery from '../../components/ImageGalery';
import {
    IoHeartOutline,
    IoAddOutline,
    IoRemoveOutline,
} from 'react-icons/io5';
import { BsCheck } from 'react-icons/bs';

import styles from './Product.module.scss';
const ProductInfo = ({ product }) => {
    const { name, description, url, color, size, price, sale } = product;
    const { addToCart } = useMyContext();

    const [selectedColor, setSelectedColor] = useState(color[0]);
    const [selectedSize, setSelectedSize] = useState(size[0]);
    const [quantity, setQuantity] = useState(1);

    const { currency } = useMyContext();
    const { pathname } = useLocation();

    const handleQuantity = (value) => {
        if (value === 'inc' && quantity < 100) {
            setQuantity((prev) => prev + 1);
        } else if (value === 'dec' && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleInput = (value) => {
        if (value < 100 && value > 1) {
            setQuantity(value);
        } else if (value < 1) {
            setQuantity(1);
        } else {
            setQuantity(100);
        }
    };

    const handleSubmit = () => {
        const cartItem = {
            ...product,
            quantity,
            selectedColor,
            selectedSize,
        };
        addToCart(cartItem);
    };

    return (
        <section>
            <div className="container">
                <Breadcrumb title={name} pathname={pathname} />
                <div className={styles['product-info']}>
                    <ImageGalery url={url} name={name} />
                    <div className={styles.content}>
                        <h2 className={styles['product-name']}>{name}</h2>
                        <div className={styles.rating}>
                            {StarRating(4.5)} <span>(100 rewiews)</span>
                        </div>
                        <h3 className={styles.price}>
                            {sale < 0 && (
                                <span>
                                    {' '}
                                    {convertCurrency(price, currency)}
                                    {currency === 'USD' ? '$' : '₼'}
                                </span>
                            )}

                            {convertCurrency(price + sale, currency)}
                            {currency === 'USD' ? '$' : '₼'}
                        </h3>
                        <p className={styles.description}>{description}</p>

                        <ul className={styles.specs}>
                            <li>
                                <h4>Available :</h4>
                                <p>In Stock</p>
                            </li>
                            <li>
                                <h4>Color :</h4>
                                <p>
                                    {color.map((item, idx) => (
                                        <button
                                            key={idx}
                                            className={styles.color}
                                            style={{
                                                background: `${item}`,
                                            }}
                                            onClick={() =>
                                                setSelectedColor(item)
                                            }
                                        >
                                            {selectedColor === item && (
                                                <span>
                                                    <BsCheck color="white" />
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                </p>
                            </li>
                            {size && (
                                <li>
                                    <h4>Size :</h4>
                                    <div>
                                        {size.map((item, idx) => (
                                            <button
                                                className={`${styles.size} ${
                                                    item === selectedSize &&
                                                    styles.active
                                                }`}
                                                key={idx}
                                                onClick={() =>
                                                    setSelectedSize(item)
                                                }
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                </li>
                            )}

                            <li>
                                <h4>Quantity :</h4>
                            </li>
                        </ul>

                        <div className={styles.order}>
                            <input
                                type="number"
                                value={quantity}
                                min="1"
                                max="100"
                                onChange={(e) => handleInput(+e.target.value)}
                            />
                            <div className={styles['btn-group']}>
                                <button
                                    type="button"
                                    onClick={() => handleQuantity('inc')}
                                >
                                    <IoAddOutline />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleQuantity('dec')}
                                >
                                    <IoRemoveOutline />
                                </button>
                            </div>
                            <button
                                className={styles.add}
                                type="button"
                                onClick={() => handleSubmit()}
                            >
                                ADD TO CART
                            </button>
                            <button className={styles.fav} type="button">
                                <span>
                                    <IoHeartOutline />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProductInfo;
