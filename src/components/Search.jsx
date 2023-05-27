import { forwardRef, useEffect, useState } from 'react';
import { useProductContext } from '../context/ProductsContext';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './Search.module.scss';
const Search = forwardRef((props, ref) => {
    const { isSearchActive, closeSearch, setSearch, search } = props;
    const [filteredProducts, setFilteredProducts] = useState([]);

    const { products } = useProductContext();

    useEffect(() => {
        if (search !== '') {
            setFilteredProducts(
                products.filter((item) =>
                    item.name.toLowerCase().includes(search.toLowerCase())
                )
            );
        } else {
            setFilteredProducts([]);
        }
    }, [search, products]);

    return (
        <div
            id="search"
            className={`${styles.search} ${
                isSearchActive ? styles.show : null
            }`}
        >
            <input
                // ref={ref}
                value={search}
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Products..."
            />

            <button
                className={styles['close-btn']}
                onClick={() => closeSearch()}
            >
                <AiOutlineClose />
            </button>

            <ul className={styles.content}>
                {filteredProducts?.map((item) => {
                    const { id, category, name, url } = item;
                    return (
                        <li key={id} onClick={() => closeSearch()}>
                            <Link to={`/${category}/${id}`}>
                                <figure className={styles.img}>
                                    <img src={url[0]} alt={name} />
                                </figure>
                                <div>
                                    <h4>{name}</h4>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
});
export default Search;
