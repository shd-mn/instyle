import { useMyContext } from '../../context/MainContext';
import FilterList from './FilterList';
import FilterSkleton from './FilterSkleton';
import ColorFilter from './ColorFilter';
import PriceRange from './PriceRange';
import styles from './Products.module.scss';
const Filter = ({ products, isLoading }) => {
    const { clearFilter } = useMyContext();
    if (isLoading) {
        return (
            <div className={styles.filter}>
                <FilterSkleton count={5} />;
            </div>
        );
    }
    return (
        <div className={styles.filter}>
            <FilterList title="subcategory" products={products} />
            <FilterList title="size" products={products} />
            <ColorFilter title="color" products={products} />
            <PriceRange title="price" products={products} />

            <div className={styles['clear-filter']}>
                <button type="button" onClick={() => clearFilter()}>
                    Clear Filter
                </button>
            </div>
        </div>
    );
};
export default Filter;
