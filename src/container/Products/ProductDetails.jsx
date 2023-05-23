import { useState } from 'react';
import { reviews } from '../../mock/reviews';
import { StarRating } from '../../components/StarRating';
import styles from './ProductDetails.module.scss';

const ProductDetails = () => {
    const [activeTab, setActiveTab] = useState(2);

    const tabs = [
        {
            title: 'Description',
        },
        {
            title: 'Specification',
        },
        {
            title: 'Reviews',
        },
    ];

    return (
        <div className={styles.details}>
            <div className={styles['tab-header']}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`${
                            index === activeTab ? styles.active : ''
                        }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className={styles['tab-content']}>
                {activeTab === 0 && (
                    <div className={styles.desc}>
                        <p>
                            Miss Selfridge takes you from day to date night with
                            its off-duty looks and full-on glamour. Solve
                            what-to-wear dilemmas with its dresses and
                            accessories that combine inherent femininity and an
                            impressive attention to detail.
                        </p>
                    </div>
                )}

                {activeTab === 1 && (
                    <ul>
                        <li>
                            <span></span>All other dresses can go home
                        </li>
                        <li>
                            <span></span>V-neck
                        </li>
                        <li>
                            <span></span>Adjustable straps
                        </li>
                        <li>
                            <span></span>Ruffle details
                        </li>
                        <li>
                            <span></span>Asymmetric hem
                        </li>
                        <li>
                            <span></span>Regular fit
                        </li>
                        <li>
                            Chiffon: sheer, lightweight fabric with a grainy
                            feel
                        </li>
                        <li>Lining: 100% Polyester, Main: 100% Polyester.</li>
                        <li> Product Code: 119483750</li>
                    </ul>
                )}

                {activeTab === 2 &&
                    reviews.map((rev) => (
                        <div key={rev.id} className={styles.reviews}>
                            <div className={styles.stars}>
                                {StarRating(rev.rating)}
                                <h5>{rev.name}</h5>
                            </div>

                            <p className={styles.comment}>{rev.comment}</p>
                            <div className={styles['rating-info']}>
                                <p>{rev.date} </p>
                                <span>|</span>
                                <p>size: {rev.size}</p>
                                <span>|</span>
                                <p>color: {rev.color}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProductDetails;
