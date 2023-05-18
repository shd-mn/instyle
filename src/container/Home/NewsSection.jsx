import { Link } from 'react-router-dom';
import { useMyContext } from '../../context/MainContext';
import styles from './NewsSection.module.scss';
const NewsSection = () => {
    const { news } = useMyContext();
    return (
        <section className={styles['news-section']}>
            <div className="container">
                <div className="section-nav">
                    <h2 className="h2">Latest News</h2>
                    <Link className="link" to="/news">
                        View All
                    </Link>
                </div>
                <div className={styles.news}>
                    {news.map((item) => (
                        <article
                            key={item.id}
                            className={styles['single-news']}
                        >
                            <figure className={styles.figure}>
                                <img src={item.img[0]} alt={item.title} />
                            </figure>
                            <h5>{item.category}</h5>
                            <h3>{item.title}</h3>
                            <Link className="link" to={`/news/${item.title}`}>
                                Read More
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
