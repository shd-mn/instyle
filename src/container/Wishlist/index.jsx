import { useMyContext } from '../../context/MainContext';
import Breadcrumb from '../../components/Breadcrumb';
import ProductCard from '../../layout/ProductCard';
import styles from './Wishlist.module.scss';
const Wishlist = () => {
    const { wishlist } = useMyContext();
    return (
        <div className="container">
            <Breadcrumb title="wishlist" />
            <div className={styles['wishlist-items']}>
                {wishlist?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default Wishlist;
