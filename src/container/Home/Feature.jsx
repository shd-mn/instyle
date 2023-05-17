import { BiSupport } from 'react-icons/bi';
import styles from './Feature.module.scss';
const Feature = () => {
    return (
        <section className={styles.feature}>
            <div className="container">
                <ul>
                    <li>
                        <span>
                            <BiSupport size={'22px'} />
                        </span>
                        <div className={styles['text-box']}>
                            <h3>Free Shipping</h3>
                            <p>On All Orders</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <BiSupport size={'22px'} />
                        </span>
                        <div className={styles['text-box']}>
                            <h3>Free Shipping</h3>
                            <p>On All Orders</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <BiSupport size={'22px'} />
                        </span>
                        <div className={styles['text-box']}>
                            <h3>100% Return</h3>
                            <p>On All Orders</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Feature;
