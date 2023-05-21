import { useLocation } from 'react-router-dom';
import PageTitle from '../layout/PageTitle';
import Wishlist from '../container/Wishlist';
const WishlistPage = () => {
    const { pathname } = useLocation();
    return (
        <div>
            <PageTitle title={'Wishlist'} pathname={pathname} />
            <Wishlist />
        </div>
    );
};
export default WishlistPage;
