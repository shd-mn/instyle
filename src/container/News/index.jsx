import { Link } from 'react-router-dom';
import styles from './News.module.scss';
import { useFetch } from '../../hooks/useFetch';
import Breadcrumb from '../../components/Breadcrumb';

const News = () => {
    const { data: news, isLoading, error } = useFetch('news', '*');

    return (
        <>
            <div className="container">
                <Breadcrumb title="News" />
                <div className={styles.news}>
                    {news.map((item) => (
                        <article key={item.id} className={styles['news-item']}>
                            <figure className={styles.figure}>
                                <img src={item.img[0]} alt={item.title} />
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
        </>
    );
};
export default News;
