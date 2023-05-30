import { useState } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

import { useMyContext } from '../../context/MainContext';
import styles from './Products.module.scss';
import { BsCheck } from 'react-icons/bs';
const ColorFilter = ({ title, products }) => {
    const [show, setShow] = useState(true);

    const { filterProducts, isChecked } = useMyContext();

    const filterItem = [
        ...new Set(products.flatMap((product) => product[title])),
    ];

    const handleColorFilter = (item) => {
        filterProducts(title, item);
    };

    return (
        <div className={styles.accordion}>
            <div className={styles.header} onClick={() => setShow(!show)}>
                <h4>{title}</h4>
                <span>
                    {show ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
                </span>
            </div>
            {show && (
                <div className={styles.color}>
                    <span onClick={() => handleColorFilter('all')}>
                        {isChecked.color.length === 0 && <BsCheck />}
                    </span>
                    {filterItem.map((item) => (
                        <span
                            key={item}
                            className={styles['color-item']}
                            style={{ background: `${item}` }}
                            onClick={() => handleColorFilter(item)}
                        >
                            {isChecked.color.includes(item) && <BsCheck />}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};
export default ColorFilter;
