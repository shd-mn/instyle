import { Link } from 'react-router-dom';
import ProductCard from '../../layout/ProductCard';
import styles from './Products.module.scss';
const Products = ({ products }) => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className={styles.products}>
                        {products.map((product) => (
                            <Link key={product.id}>
                                <ProductCard product={product} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Products;
