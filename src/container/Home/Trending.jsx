import { useEffect, useRef, useState } from 'react';
import { useProduct } from '../../context/MainContext';
import { convertCurrency } from '../../utils/convertCurrency';
import {
    IoResizeOutline,
    IoHeartOutline,
    IoCartOutline,
} from 'react-icons/io5';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import styles from './Trending.module.scss';

const Trending = () => {
    const { products, trendingProducts, currency } = useProduct();
    const [isEnd, setIsEnd] = useState(false);
    const [isStart, setIsStart] = useState(false);
    const container = useRef();

    const isScrollStart = () => {};

    const isScrollEnd = () => {};

    const handlePrevProducts = () => {
        container.current.scrollLeft -= '280';
    };
    const handleNextProducts = () => {
        container.current.scrollLeft += '280';
    };

    return (
        <section>
            <div className={`${styles.trending} container`}>
                <div className={styles['section-nav']}>
                    <div className={styles['section-title']}>
                        <h3>Trending Now</h3>
                    </div>
                    <div className={styles['product-btn-group']}>
                        <button type="button">All</button>
                        <button type="button">Women</button>
                        <button type="button">Men</button>
                        <button type="button">Children</button>
                    </div>
                </div>
                <div ref={container} className={styles['product-category']}>
                    {trendingProducts &&
                        trendingProducts.map((item) => (
                            <article
                                key={item.id}
                                className={styles['item-card']}
                            >
                                <figure className={styles['img-box']}>
                                    <img src={item.url[2]} alt={item.name} />
                                    <div className={styles['button-group']}>
                                        <span>
                                            <IoCartOutline size={'20px'} />
                                        </span>
                                        <span>
                                            <IoHeartOutline size={'20px'} />
                                        </span>
                                        <span>
                                            <IoResizeOutline size={'20px'} />
                                        </span>
                                    </div>
                                    {item.sale !== 0 && (
                                        <div className={styles.badge}>
                                            {item.sale.toFixed(2)}
                                        </div>
                                    )}
                                </figure>
                                <div className={styles['item-text-box']}>
                                    <h5>{item.name}</h5>
                                    <p className={styles['item-price']}>
                                        <span>
                                            {convertCurrency(
                                                item.price,
                                                currency
                                            )}
                                        </span>
                                        {convertCurrency(
                                            item.price - item.sale,
                                            currency
                                        )}
                                        {currency === 'USD' ? '$' : '₼'}
                                    </p>
                                </div>
                            </article>
                        ))}
                </div>
                <div className={styles['slider-button-group']}>
                    <button
                        type="button"
                        onClick={() => {
                            handlePrevProducts();
                        }}
                        disabled={isStart}
                    >
                        <span>
                            <HiOutlineChevronLeft />
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            handleNextProducts();
                        }}
                        disabled={isEnd}
                    >
                        <span>
                            <HiOutlineChevronRight />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Trending;
