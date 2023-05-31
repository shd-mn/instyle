import { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

import { useMyContext } from '../../context/MainContext';
import styles from './Products.module.scss';
const CategoryFilter = ({ title, products }) => {
    const [show, setShow] = useState(true);

    const { filterProducts, isChecked } = useMyContext();

    const filterItem = [
        ...new Set(products.flatMap((product) => product[title])),
    ];

    return (
        <div className={styles.accordion}>
            <div className={styles.header} onClick={() => setShow(!show)}>
                <h4>Category</h4>
                <span>
                    {show ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
                </span>
            </div>
            {show && (
                <div className={styles.category}>
                    <label>
                        <input
                            type="checkbox"
                            checked={isChecked[title].length === 0}
                            onChange={() => {
                                filterProducts(title, 'all');
                            }}
                        />
                        All
                    </label>

                    {filterItem.map((item) => (
                        <label key={item}>
                            <input
                                type="checkbox"
                                checked={isChecked[title].includes(item)}
                                onChange={() => {
                                    filterProducts(title, item);
                                }}
                            />
                            {item}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};
export default CategoryFilter;
