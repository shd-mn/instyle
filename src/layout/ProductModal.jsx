import { useEffect, useState } from 'react';
import { useMyContext } from '../context/MainContext';

import { BsXLg, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import styles from './ProductModal.module.scss';

const ProductModal = () => {
    const { isModalShow, modalContent, closeModal } = useMyContext();
    const [index, setIndex] = useState(0);

    const handlePrevImg = () => {
        if (index < 1) {
            setIndex(modalContent?.length - 1);
        } else {
            setIndex((prev) => prev - 1);
        }
    };
    const handleNextImg = () => {
        if (index >= modalContent?.length - 1) {
            setIndex(0);
        } else {
            setIndex((prev) => prev + 1);
        }
    };

    useEffect(() => {
        setIndex(0);
    }, [isModalShow]);

    return (
        <>
            <div
                className={`${styles.modal} ${
                    isModalShow ? styles.show : null
                }`}
            >
                <figure>
                    <img src={modalContent[index]} alt="product" />
                </figure>
                <div className={styles['btn-group']}>
                    <button type="button" onClick={handlePrevImg}>
                        <BsChevronLeft />
                    </button>
                    <button type="button" onClick={handleNextImg}>
                        <BsChevronRight />
                    </button>
                </div>
                <button
                    className={styles['close-btn']}
                    type="button"
                    onClick={closeModal}
                >
                    <BsXLg />
                </button>
                <div className={styles['slider-dot']}>
                    {modalContent.map((_, idx) => (
                        <button
                            key={idx}
                            className={`${styles['dot-btn']} ${
                                index === idx && styles.active
                            }`}
                            type="button"
                            onClick={() => setIndex(idx)}
                        ></button>
                    ))}
                </div>
            </div>

            {isModalShow && (
                <div
                    className={styles.overlay}
                    onClick={() => closeModal()}
                ></div>
            )}
        </>
    );
};
export default ProductModal;
