import { useMyContext } from '../../context/MainContext';
import ProductCard from '../../layout/ProductCard';
import Filter from './Filter';
import styles from './Products.module.scss';
const Products = ({ products, isLoading, error }) => {
    const { isChecked } = useMyContext();

    const filtered = products.filter((item) => {
        const { color, size } = isChecked;

        return (
            color.every((c) => item.color.includes(c)) &&
            size.every((c) => item.size.includes(c))
        );
    });

    return (
        <section>
            <div className="container">
                <div className={styles.products}>
                    <Filter products={products} />
                    <div className={styles['products-list']}>
                        {filtered?.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Products;
