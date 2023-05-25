import { useFetch } from '../../hooks/useFetch';
import { useMyContext } from '../../context/MainContext';
import Breadcrumb from '../../components/Breadcrumb';
import Filter from './Filter';
import ProductCard from '../../layout/ProductCard';
import styles from './Products.module.scss';
import CardSkeleton from '../../layout/CardSkeleton';
const Products = ({ category }) => {
    const { isChecked } = useMyContext();
    const {
        data: products,
        isLoading,
        error,
    } = useFetch('products', '*', `&category=eq.${category}`, '0-17');
    // & price=gt.90 & price=lte.138

    const filtered = products?.filter((item) => {
        const { color, size } = isChecked;

        return (
            color.every((c) => item.color.includes(c)) &&
            size.every((c) => item.size.includes(c))
        );
    });

    return (
        <div className="container">
            <Breadcrumb title={category} />
            <div className={styles.products}>
                <Filter products={products} isLoading={isLoading} />
                <div className={styles['products-list']}>
                    {isLoading && <CardSkeleton count={9} />}
                    {filtered?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Products;
