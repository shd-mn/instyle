import { useLocation } from 'react-router-dom';
import Cart from '../container/Cart';
import PageTitle from '../layout/PageTitle';

const CartPage = () => {
    const { pathname } = useLocation();
    return (
        <div>
            <PageTitle title={'Cart'} pathname={pathname} />
            <Cart />
        </div>
    );
};
export default CartPage;
