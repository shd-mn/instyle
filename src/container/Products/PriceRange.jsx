import { useEffect, useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

import { useMyContext } from '../../context/MainContext';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

import { RANGE_FILTER } from '../../context/actions';
import styles from './Products.module.scss';

const PriceRange = ({ title, products }) => {
    const [show, setShow] = useState(true);
    const [maxRange, setMaxRange] = useState(0);
    const minRange = 0;

    const { rangeFilter, currency, dispatch } = useMyContext();
    useEffect(() => {
        setMaxRange(
            Math.ceil(
                products
                    .map((item) => item.price + item.sale)
                    .reduce((acc, cur) => {
                        if (acc < cur) {
                            acc = cur;
                        }
                        return acc;
                    }, 0)
            )
        );

        dispatch({
            type: RANGE_FILTER,
            payload: { min: minRange, max: maxRange },
        });
    }, [products, maxRange, dispatch]);

    const handleRange = () => {
        const minInputValue = document
            .querySelector('#range-slider')
            .getElementsByTagName('input')[0].value;
        const maxInputValue = document
            .querySelector('#range-slider')
            .getElementsByTagName('input')[1].value;

        dispatch({
            type: RANGE_FILTER,
            payload: { min: minInputValue, max: maxInputValue },
        });
    };

    return (
        <div className={styles['price-range']}>
            <div className={styles.header} onClick={() => setShow(!show)}>
                <h4>{title}</h4>
                <span>
                    {show ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
                </span>
            </div>
            {show && (
                <div className={styles['range-body']}>
                    <div className={styles['price']}>
                        <span>
                            {rangeFilter.min} {currency === 'USD' ? '$' : '₼'}
                        </span>
                        <span>
                            {rangeFilter.max} {currency === 'USD' ? '$' : '₼'}
                        </span>
                    </div>

                    <RangeSlider
                        min={0}
                        max={maxRange}
                        value={[rangeFilter.min, rangeFilter.max]}
                        id={'range-slider'}
                        rangeSlideDisabled={true}
                        onInput={handleRange}
                    />
                </div>
            )}
        </div>
    );
};
export default PriceRange;
