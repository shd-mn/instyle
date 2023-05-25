import { useEffect, useState } from 'react';
import ProductCard from '../../../layout/ProductCard';
import CategoryNav from './CategoryNav';
import CardSkeleton from '../../../layout/CardSkeleton';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import styles from './Category.module.scss';

const Category = ({ products, isLoading, sectionTitle }) => {
    const [selected, setSelected] = useState('all');
    const [sliderItem, setSliderItem] = useState(0);
    const [sliderCount, setSliderCount] = useState(4);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isEnd, setIsEnd] = useState(false);
    const [isStart, setIsStart] = useState(true);

    const filteredProduct =
        selected === 'all'
            ? products
            : products.filter((product) => product.category === selected);

    const handleCategory = (e, str) => {
        e.preventDefault();
        setSelected(str);
        setSliderItem(0);
    };

    const handlePrevProducts = () => {
        setSliderItem((prev) => prev - 1);
    };
    const handleNextProducts = () => {
        setSliderItem((prev) => prev + 1);
    };

    useEffect(() => {
        if (filteredProduct.length < sliderCount) {
            setIsStart(true);
            setIsEnd(true);
        } else {
            if (sliderItem > 0) {
                setIsStart(false);
            } else {
                setIsStart(true);
            }

            if (sliderItem + sliderCount >= filteredProduct.length) {
                setIsEnd(true);
            } else {
                setIsEnd(false);
            }
        }
    }, [sliderItem, sliderCount, filteredProduct.length]);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            if (screenWidth >= 1280) {
                setSliderCount(4);
            } else if (window.innerWidth < 1280) {
                setSliderCount(3);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth]);

    return (
        <section>
            <div className="category container">
                <CategoryNav
                    sectionTitle={sectionTitle}
                    selected={selected}
                    handleCategory={handleCategory}
                />
                <div className={styles['product-category']}>
                    {isLoading && <CardSkeleton count={sliderCount} />}
                    {filteredProduct
                        .slice(sliderItem, sliderItem + sliderCount)
                        .map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </div>
                <div className={styles['slider-button-group']}>
                    <button
                        className={styles['slider-btn']}
                        type="button"
                        onClick={() => handlePrevProducts()}
                        disabled={isStart}
                    >
                        <span>
                            <HiOutlineChevronLeft />
                        </span>
                    </button>

                    <button
                        className={styles['slider-btn']}
                        type="button"
                        onClick={() => handleNextProducts()}
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

export default Category;
