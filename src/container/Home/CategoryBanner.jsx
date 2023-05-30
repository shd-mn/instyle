import styles from './CategoryBanner.module.scss';

import { banner } from '../../utils/constants';
import { Link } from 'react-router-dom';

const CategoryBanner = () => {
    return (
        <section className={styles['banner-section']}>
            <div className="container">
                <div className={styles.row}>
                    {banner.map((item) => (
                        <Link
                            key={item.id}
                            to={item.url}
                            className={styles.content}
                        >
                            <img src={item.img} alt={item.text} />
                            <h4 className={styles.text}>{item.text}</h4>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default CategoryBanner;
