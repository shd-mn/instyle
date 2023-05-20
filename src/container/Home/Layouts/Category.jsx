import { useEffect, useRef, useState } from 'react';

import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import ProductCard from '../../../layout/ProductCard';
import styles from './Category.module.scss';
import CategoryNav from './CategoryNav';

const Category = ({ products, sectionTitle }) => {
    const [selected, setSelected] = useState('all');
    const [isEnd, setIsEnd] = useState(false);
    const [isStart, setIsStart] = useState(false);
    const [hasScroll, setHasScroll] = useState(true);
    const container = useRef();

    const filteredProduct =
        selected === 'all'
            ? products
            : products.filter((product) => product.category === selected);

    const handleCategory = (e, str) => {
        e.preventDefault();
        setSelected(str);
    };

    const isScrollStart = () => container.current.scrollLeft === 300;
    const isScrollEnd = () =>
        container.current.scrollLeft + container.current.offsetWidth ===
        container.current.scrollWidth - 300;

    const handlePrevProducts = () => {
        if (hasScroll) {
            container.current.scrollLeft -= '300';
            setIsEnd(false);
            if (isScrollStart()) {
                setIsStart(true);
            }
        }
    };
    const handleNextProducts = () => {
        if (hasScroll) {
            container.current.scrollLeft += '300';
            setIsStart(false);
            if (isScrollEnd()) {
                setIsEnd(true);
            }
        }
    };

    useEffect(() => {
        if (filteredProduct.length > 4) {
            setHasScroll(true);
            setIsStart(true);
            setIsEnd(false);
            if (container.current.scrollLeft > 0) {
                container.current.scrollLeft = 0;
                setIsEnd(false);
            }
        } else {
            setHasScroll(false);
        }
    }, [filteredProduct.length, selected]);

    useEffect(() => {
        container.current.style.opacity = '0';
        const timeout = setTimeout(() => {
            container.current.style.opacity = '1';
        }, 300);

        return () => clearTimeout(timeout);
    }, [selected]);

    return (
        <section>
            <div className="category container">
                <CategoryNav
                    sectionTitle={sectionTitle}
                    selected={selected}
                    handleCategory={handleCategory}
                />
                <div ref={container} className={styles['product-category']}>
                    {filteredProduct &&
                        filteredProduct.map((product) => (
                            <Link
                                key={product.id}
                                className={styles['product-link']}
                                to={`/${product.id}`}
                            >
                                <ProductCard product={product} />
                            </Link>
                        ))}
                </div>
                <div className={styles['slider-button-group']}>
                    <button
                        className={styles['slider-btn']}
                        type="button"
                        onClick={() => {
                            handlePrevProducts();
                        }}
                        disabled={isStart || !hasScroll}
                    >
                        <span>
                            <HiOutlineChevronLeft />
                        </span>
                    </button>

                    <button
                        className={styles['slider-btn']}
                        type="button"
                        onClick={() => {
                            handleNextProducts();
                        }}
                        disabled={isEnd || !hasScroll}
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

export default Category;
