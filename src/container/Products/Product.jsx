import { useParams, useLocation } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import { useFetch } from '../../hooks/useFetch';

const Product = () => {
    const { id } = useParams();
    const { pathname } = useLocation();
    const { data: product, isLoading } = useFetch(
        'products',
        '*',
        `&id=eq.${id}`
    );
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const { name, category, subcategory, description } = product[0];
    return (
        <div className="container">
            <Breadcrumb title={name} pathname={pathname} />
            <div>
                <h3>{name}</h3>
                <h3>{description}</h3>
            </div>
        </div>
    );
};
export default Product;
