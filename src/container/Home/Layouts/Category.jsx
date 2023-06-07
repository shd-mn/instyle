import { useEffect, useRef, useState } from 'react';
import ProductCard from '../../../layout/ProductCard';
import CategoryNav from './CategoryNav';
import CardSkeleton from '../../../layout/CardSkeleton';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './Category.module.scss';

const responsive = {
    lg: {
        breakpoint: { max: 4000, min: 768 },
        items: 4,
        slidesToSlide: 2,
    },
    md: {
        breakpoint: { max: 768, min: 464 },
        items: 3,
    },

    sm: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};

const Category = ({ products, isLoading, sectionTitle }) => {
    const [selected, setSelected] = useState('all');
    const [filter, setFilter] = useState([]);
    const carouselRef = useRef(null);

    const handleCategory = (e, str) => {
        e.preventDefault();
        setSelected(str);
    };

    useEffect(() => {
        selected === 'all'
            ? setFilter(products)
            : setFilter(
                  products.filter((product) => product.category === selected)
              );
        carouselRef.current.goToSlide(0, true);
    }, [products, selected]);

    return (
        <section>
            <div className="category container">
                <CategoryNav
                    sectionTitle={sectionTitle}
                    selected={selected}
                    handleCategory={handleCategory}
                />
                {isLoading && <CardSkeleton count={4} />}
                <Carousel
                    responsive={responsive}
                    ref={carouselRef}
                    containerClass={styles['product-category']}
                >
                    {filter.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default Category;
