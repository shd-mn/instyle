import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

import ProductDetails from './ProductDetails';
import RelatedProducts from './RelatedProducts';
import ProductInfo from './ProductInfo';

const Product = () => {
    const { id } = useParams();
    const { data: product, isLoading } = useFetch(
        'products',
        '*',
        `&id=eq.${id}`
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <ProductInfo product={product[0]} />
            <ProductDetails />
            <RelatedProducts id={id} product={product[0]} />
        </>
    );
};
export default Product;
