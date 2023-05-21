import { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

import styles from './Products.module.scss';
import { useMyContext } from '../../context/MainContext';
const FilterList = ({ title, products }) => {
    const [show, setShow] = useState(true);

    const { filterProducts } = useMyContext();

    const filterItem = [
        ...new Set(products.flatMap((product) => product[title])),
    ];

    return (
        <div className={styles.accordion}>
            <div className={styles.header} onClick={() => setShow(!show)}>
                <h4>{title}</h4>
                <span>
                    {show ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
                </span>
            </div>
            {show && (
                <div className={styles.body}>
                    {filterItem.map((item) => (
                        <label key={item}>
                            <input
                                type="checkbox"
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
export default FilterList;
