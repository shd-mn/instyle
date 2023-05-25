import { useProductContext } from '../../context/ProductsContext';
import Category from '../Home/Layouts/Category';


const RelatedProducts = ({ id, product }) => {
    const { category, subcategory } = product;
    const { products, isLoading } = useProductContext();

    const relatedProducts = products
        ?.filter(
            (product) =>
                product.id !== id &&
                product.category === category &&
                product.subcategory.some((item) => subcategory.includes(item))
        )
        .slice(0, 8);

    return (
        <Category
            sectionTitle="Related Products"
            products={relatedProducts}
            isLoading={isLoading}
        />
    );
};
export default RelatedProducts;
