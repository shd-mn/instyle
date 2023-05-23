import { useFetch } from '../../hooks/useFetch';

import ProductCard from '../../layout/ProductCard';

const RelatedProducts = ({ category }) => {
    const { data: products, isLoading } = useFetch(
        'products',
        '*',
        `&category=eq.${category}`,
        '0-3'
    );

    return (
        <div>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};
export default RelatedProducts;
