import React, { useState } from 'react';
import { useProduct } from '../../context/MainContext';
import { convertCurrency } from '../../utils/convertCurrency';
import {
    IoResizeOutline,
    IoHeartOutline,
    IoCartOutline,
} from 'react-icons/io5';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const Trending = () => {
    const { products, currency } = useProduct();
    const [itemNum, setItemNum] = useState(0);
    return (
        <section>
            <div className="trending container">
                <div className="section-nav">
                    <div className="section-title">
                        <h3>Trending Now</h3>
                    </div>
                    <div className="product-btn-group">
                        <button type="button">All</button>
                        <button type="button">Women</button>
                        <button type="button">Men</button>
                        <button type="button">Children</button>
                    </div>
                </div>
                <div className="product-category">
                    {products &&
                        products.slice(itemNum, itemNum + 4).map((item) => (
                            <article key={item.id} className="item-card">
                                <figure className="img-box">
                                    <img src={item.url[2]} alt={item.name} />
                                    <div className="button-group">
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
                                        <div className="badge">
                                            {item.sale.toFixed(2)}
                                        </div>
                                    )}
                                </figure>
                                <div className="item-text-box">
                                    <h5>{item.name}</h5>
                                    <p className="item-price">
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
                <div className="slider-button-group">
                    <button
                        type="button"
                        onClick={() => {
                            setItemNum(itemNum - 1);
                        }}
                    >
                        <span>
                            <HiOutlineChevronLeft />
                        </span>
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setItemNum(itemNum + 1);
                        }}
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
