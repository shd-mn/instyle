import { Link } from 'react-router-dom';
import { useMyContext } from '../../context/MainContext';
import styles from './News.module.scss';
import PageTitle from '../../layout/PageTitle';
import { useLocation } from 'react-router-dom';

const News = () => {
    const { news } = useMyContext();
    const { pathname } = useLocation();

    return (
        <>
            <PageTitle title="News" pathname={pathname} />
            <div className="container">
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
