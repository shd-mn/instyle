import { useState } from 'react';
import ProductCard from '../../../layout/ProductCard';
import CategoryNav from './CategoryNav';
import CardSkeleton from '../../../layout/CardSkeleton';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './Category.module.scss';

const responsive = {
    xl2: {
        breakpoint: { max: 4000, min: 1280 },
        items: 4,
    },
    xl: {
        breakpoint: { max: 1280, min: 1140 },
        items: 4,
    },
    lg: {
        breakpoint: { max: 1140, min: 768 },
        items: 4,
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

    const filteredProduct =
        selected === 'all'
            ? products
            : products.filter((product) => product.category === selected);

    const handleCategory = (e, str) => {
        e.preventDefault();
        setSelected(str);
    };

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
                    containerClass={styles['product-category']}
                    // removeArrowOnDeviceType={['md', 'sm']}
                >
                    {filteredProduct.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default Category;
