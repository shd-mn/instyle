import { useMyContext } from '../../context/MainContext';
import CategoryFilter from './CategoryFilter';
import SizeFilter from './SizeFilter';
import ColorFilter from './ColorFilter';
import PriceRange from './PriceRange';
import FilterSkleton from './FilterSkleton';
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
            <CategoryFilter title="subcategory" products={products} />
            <SizeFilter title="size" products={products} />
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
