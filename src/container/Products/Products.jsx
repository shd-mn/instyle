import { useFetch } from '../../hooks/useFetch';
import { useMyContext } from '../../context/MainContext';
import Breadcrumb from '../../components/Breadcrumb';
import Filter from './Filter';
import ProductCard from '../../layout/ProductCard';
import styles from './Products.module.scss';
import CardSkeleton from '../../layout/CardSkeleton';
import { useEffect, useState } from 'react';
import {
    IoChevronDownOutline,
    IoChevronUpOutline,
    IoSearchOutline,
} from 'react-icons/io5';
const Products = ({ category }) => {
    const [sortedProduct, setSortedProduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sort, setSort] = useState('a-z');
    const [search, setSearch] = useState('');
    const { isChecked, rangeFilter } = useMyContext();
    const {
        data: products,
        isLoading,
        error,
    } = useFetch('products', '*', `&category=eq.${category}`, '0-17');
    // & price=gt.90 & price=lte.138

    const checkFilter = (list, filterList) => {
        if (filterList.length > 0) {
            return filterList.some((f) => list.includes(f));
        } else {
            return true;
        }
    };

    useEffect(() => {
        setFilteredProducts(
            products?.filter((item) => {
                const { color, size, subcategory } = isChecked;
                const calcPrice = item.price + item.sale;

                return (
                    item.name.toLowerCase().includes(search.toLowerCase()) &&
                    checkFilter(item.subcategory, subcategory) &&
                    checkFilter(item.color, color) &&
                    checkFilter(item.size, size) &&
                    calcPrice >= rangeFilter.min &&
                    calcPrice <= rangeFilter.max
                );
            })
        );
    }, [isChecked, products, search, rangeFilter]);

    useEffect(() => {
        if (sort === 'a-z') {
            setSortedProduct(
                filteredProducts
                    .slice()
                    .sort((a, b) => a.name.localeCompare(b.name))
            );
        } else if (sort === 'z-a') {
            setSortedProduct(
                filteredProducts
                    .slice()
                    .sort((a, b) => b.name.localeCompare(a.name))
            );
        } else if (sort === 'lowest') {
            setSortedProduct(
                filteredProducts
                    .slice()
                    .sort((a, b) => a.price + a.sale - (b.price + b.sale))
            );
        } else if (sort === 'highest') {
            setSortedProduct(
                filteredProducts
                    .slice()
                    .sort((a, b) => b.price + b.sale - (a.price + a.sale))
            );
        }
    }, [sort, filteredProducts]);

    return (
        <div className="container">
            <Breadcrumb title={category} />
            <div className={styles['page-title']}>
                <form
                    className={styles['search-form']}
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <input
                        value={search}
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <span>
                        <IoSearchOutline />
                    </span>
                </form>
                <div className={styles['page-info']}>
                    <p>{sortedProduct.length} Products Found</p>
                    <Sort sort={sort} setSort={setSort} />
                </div>
            </div>
            <div className={styles.products}>
                <Filter products={products} isLoading={isLoading} />
                <div className={styles['products-list']}>
                    {isLoading && <CardSkeleton count={9} />}
                    {sortedProduct?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Sort = ({ sort, setSort }) => {
    const [isShow, setIsShow] = useState(false);
    const sortButtons = [
        { id: 1, title: 'Price(Lowest)', value: 'lowest' },
        { id: 2, title: 'Price(Highest)', value: 'highest' },
        { id: 3, title: 'Name(A-Z)', value: 'a-z' },
        { id: 4, title: 'Name(Z-A)', value: 'z-a' },
    ];
    return (
        <div className={styles.sort}>
            <button
                className={styles['dropdown-btn']}
                type="button"
                onClick={() => setIsShow(!isShow)}
            >
                {sortButtons.filter((item) => item.value === sort)[0].title} {}
                {isShow ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
            </button>

            {isShow && (
                <div
                    className={styles.dropdown}
                    onMouseLeave={() => setIsShow(false)}
                >
                    {sortButtons.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => {
                                setSort(item.value);
                                setIsShow(false);
                            }}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Products;
