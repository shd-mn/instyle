import { useParams, useLocation, Navigate } from 'react-router-dom';
import { useMyContext } from '../../context/MainContext';
import PageTitle from '../../layout/PageTitle';
import styles from './News.module.scss';
import {} from 'react-router-dom';

const SingleNews = () => {
    const { news } = useMyContext();
    const { id } = useParams();
    const { pathname } = useLocation();
    const item = news.find((item) => item.id === Number(id));

    if (!item) {
        return <Navigate to="/news" />;
    }
    const { create_at, category, author, title, img, content } = item;

    return (
        <>
            <PageTitle title="news" pathname={pathname} />
            <div className={styles['single-news']}>
                <div className="container">
                    <div className="row">
                        <h4>{category}</h4>
                        <h3>{title}</h3>
                        <h5>{author}</h5>
                        <span>{create_at}</span>
                        <img src={img[0]} alt={title} />
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SingleNews;
