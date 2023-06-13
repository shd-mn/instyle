import { AiOutlineClose } from 'react-icons/ai';
import { useMyContext } from '../context/MainContext';
import styles from './ProductModal.module.scss';

const ProductModal = () => {
    const { isModalShow, modalContent, closeModal } = useMyContext();

    if (!isModalShow) {
        return <></>;
    }
    const { name, url, color } = modalContent;
    return (
        <>
            <div
                className={`${styles.modal} ${
                    isModalShow ? styles.show : null
                }`}
            >
                <figure>
                    <img src={url[0]} alt="product" />
                </figure>
                <div className={styles.content}>
                    <h3>{name}</h3>
                    <div className={styles.color}>
                        {color.map((item) => (
                            <span
                                key={item}
                                className={styles['color-item']}
                                style={{ background: `${item}` }}
                            ></span>
                        ))}
                    </div>
                </div>
                <button
                    className={styles['close-btn']}
                    type="button"
                    onClick={closeModal}
                >
                    <AiOutlineClose />
                </button>
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
