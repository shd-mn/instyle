import styles from './Products.module.scss';
import FilterList from './FilterList';
const Filter = ({ products }) => {
    return (
        <div className={styles.filter}>
            <FilterList title="size" products={products} />
            <FilterList title="color" products={products} />
        </div>
    );
};
export default Filter;
