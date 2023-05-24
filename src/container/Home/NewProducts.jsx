import { useProductContext } from '../../context/ProductsContext';
import Category from './Layouts/Category';
const NewProducts = () => {
    const { products, isLoading, error } = useProductContext();
    const newProducts = products
        .filter((product) => product.new)
        .slice(0, products.length);
    return <Category sectionTitle="New Product" products={newProducts} />;
};
export default NewProducts;
