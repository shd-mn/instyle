import styles from './Products.module.scss';
import FilterList from './FilterList';
import FilterSkleton from './FilterSkleton';
const Filter = ({ products, isLoading }) => {
    if (isLoading) {
        return (
            <div className={styles.filter}>
                <FilterSkleton count={5} />;
            </div>
        );
    }
    return (
        <div className={styles.filter}>
            <FilterList title="size" products={products} />
            <FilterList title="color" products={products} />
        </div>
    );
};
export default Filter;
