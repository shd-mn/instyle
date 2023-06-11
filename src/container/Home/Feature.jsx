import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BsTruck, BsHeadset, BsShieldLock } from 'react-icons/bs';
import styles from './Feature.module.scss';
const Feature = () => {
    return (
        <section className={styles.feature}>
            <div className="container">
                <ul>
                    <li>
                        <span>
                            <BsTruck />
                        </span>
                        <div className={styles['text-box']}>
                            <h3>Free Shipping</h3>
                            <p>For all oder over $99</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <FaRegMoneyBillAlt />
                        </span>
                        <div className={styles['text-box']}>
                            <h3>Money Back Guarantee</h3>
                            <p>If good have Problems</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <BsHeadset />
                        </span>
                        <div className={styles['text-box']}>
                            <h3>Online Support 24/7</h3>
                            <p>Dedicated support</p>
                        </div>
                    </li>
                    <li>
                        <span>
                            <BsShieldLock />
                        </span>
                        <div className={styles['text-box']}>
                            <h3>Payment Secure</h3>
                            <p>100% secure payment</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Feature;
