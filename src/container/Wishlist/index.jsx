import { useMyContext } from '../../context/MainContext';
import ProductCard from '../../layout/ProductCard';
import styles from './Wishlist.module.scss';
const Wishlist = () => {
    const { wishlist } = useMyContext();
    return (
        <div className="container">
            <div className={styles['wishlist-items']}>
                {wishlist?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};
export default Wishlist;
