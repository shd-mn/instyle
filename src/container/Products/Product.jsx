import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import { useFetch } from '../../hooks/useFetch';
import { convertCurrency } from '../../utils/convertCurrency';

import {
    IoHeartOutline,
    IoCheckmarkSharp,
    IoAddOutline,
    IoRemoveOutline,
} from 'react-icons/io5';

import styles from './Products.module.scss';
import { useMyContext } from '../../context/MainContext';
import ImageGalery from '../../components/ImageGalery';
import ProductDetails from './ProductDetails';
import RelatedProducts from './RelatedProducts';

const Product = () => {
    const { id } = useParams();
    const [isCheked, setIsCheked] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const { pathname } = useLocation();

    const { currency } = useMyContext();

    const { data: product, isLoading } = useFetch(
        'products',
        '*',
        `&id=eq.${id}`
    );
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const {
        name,
        category,
        subcategory,
        description,
        url,
        color,
        size,
        price,
        sale,
    } = product[0];
    return (
        <div className="container">
            <Breadcrumb title={name} pathname={pathname} />
            <div className={styles.product}>
                <ImageGalery url={url} name={name} />
                <div className={styles.info}>
                    <h3>{name}</h3>
                    <h5>{description}</h5>

                    <p className={styles.price}>
                        {sale < 0 && (
                            <span>
                                {' '}
                                {convertCurrency(price, currency)}
                                {currency === 'USD' ? '$' : '₼'}
                            </span>
                        )}

                        {convertCurrency(price + sale, currency)}
                        {currency === 'USD' ? '$' : '₼'}
                    </p>

                    <ul className={styles.specs}>
                        <li>
                            <h5>Color:</h5>
                            <p>
                                {color.map((item, idx) => (
                                    <button
                                        key={idx}
                                        className={styles.color}
                                        style={{ background: `${item}` }}
                                        onClick={() => setIsCheked(idx)}
                                    >
                                        {isCheked === idx && (
                                            <span>
                                                <IoCheckmarkSharp color="white" />
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </p>
                        </li>
                        {size && (
                            <li>
                                <h5>Size:</h5>
                                <p>
                                    {size.map((item, idx) => (
                                        <button key={idx}>
                                            <span>{item}</span>
                                        </button>
                                    ))}
                                </p>
                            </li>
                        )}
                    </ul>
                    <hr />
                    <div className={styles.order}>
                        <div className={styles.quantity}>
                            <button type="button">
                                <IoRemoveOutline />
                            </button>
                            <input
                                type="number"
                                defaultValue="1"
                                min="1"
                                max="100"
                            />
                            <button type="button">
                                <IoAddOutline />
                            </button>
                        </div>
                        <div>
                            <button type="button">ADD TO CART</button>
                            <button type="button">
                                <span>
                                    <IoHeartOutline />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ProductDetails />
            <RelatedProducts category={category} subcategory={subcategory} />
        </div>
    );
};
export default Product;
