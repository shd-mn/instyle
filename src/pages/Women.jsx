import { useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import PageTitle from '../layout/PageTitle';
import Products from '../container/Products/Products';
import { useMyContext } from '../context/MainContext';
const Women = () => {
    const { pathname } = useLocation();
    const { isChecked } = useMyContext();
    const {
        data: products,
        isLoading,
        error,
    } = useFetch('products', '*', 'category=eq.women', '0-17');
    // & price=gt.90 & price=lte.138

    return (
        <div>
            <PageTitle title="Women" pathname={pathname} />
            <p>{JSON.stringify(isChecked)}</p>
            {console.log()}
            <Products products={products} isLoading={isLoading} error={error} />
        </div>
    );
};

export default Women;
