import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import styles from './NewsSection.module.scss';

import Skeleton from 'react-loading-skeleton';
const NewsSection = () => {
    const { data: news, isLoading, error } = useFetch('news', '*', '', '0-2');

    return (
        <section className={styles['news-section']}>
            <div className="container">
                <div className="category-nav">
                    <h2 className="h2">Latest News</h2>
                    <Link className="link" to="/news">
                        View All
                    </Link>
                </div>
                <div className={styles.news}>
                    {isLoading && <NewsSkeleton count={3} />}
                    {news.map((item) => (
                        <article key={item.id} className={styles['news-item']}>
                            <figure className={styles.figure}>
                                <img src={item.img[0]} alt={item.title} />{' '}
                            </figure>

                            <h5>{item.category}</h5>

                            <h3>{item.title}</h3>
                            <Link className="link" to={`/news/${item.id}`}>
                                Read More
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const NewsSkeleton = ({ count }) => {
    return Array(count)
        .fill(0)
        .map((_, index) => (
            <div key={index} style={{ width: '100%' }}>
                <div className="skeleton">
                    <Skeleton containerClassName="flex-1" height={250} />
                </div>
                <div className="skeleton">
                    <Skeleton width={100} containerClassName="flex-1" />
                </div>
                <div className="skeleton">
                    <Skeleton containerClassName="flex-1" height={60} />
                </div>
                <div className="skeleton">
                    <Skeleton
                        containerClassName="flex-1"
                        width={130}
                        height={20}
                    />
                </div>
            </div>
        ));
};

export default NewsSection;
