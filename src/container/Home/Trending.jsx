import { useProductContext } from '../../context/ProductsContext';
import Category from './Layouts/Category';

const Trending = () => {
    const { products, isLoading, error } = useProductContext();
    const trendingProducts = products
        .filter((product) => product.popular)
        .slice(0, products.length);
    return (
        <Category
            sectionTitle="Trending Now"
            products={trendingProducts}
            isLoading={isLoading}
        />
    );
};
export default Trending;
