import Skeleton from 'react-loading-skeleton';
import styles from './ProductCard.module.scss';
const CardSkeleton = ({ count }) => {
    return Array(count)
        .fill(0)
        .map((_, index) => (
            <div key={index} className={styles['product-card']}>
                <div className="skeleton">
                    <Skeleton containerClassName="flex-1" height={400} />
                </div>
                <div className="skeleton skleton-text">
                    <Skeleton containerClassName="flex-1" height={20} width={200} />
                </div>
                <div className="skeleton skleton-text">
                    <Skeleton containerClassName="flex-1" height={20} width={160} />
                </div>
            </div>
        ));
};
export default CardSkeleton;
