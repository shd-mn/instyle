import { useFetch } from '../../hooks/useFetch';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import styles from './News.module.scss';
import Breadcrumb from '../../components/Breadcrumb';

const SingleNews = () => {
    const { id } = useParams();
    const { data: news, isLoading } = useFetch('news', '*', `&id=eq.${id}`);
    const { pathname } = useLocation();
    // `&id=eq.${1}`
    // `&id=eq.1`

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (news.length === 0 && !isLoading) {
        return <Navigate to="/news" />;
    }
    const { created_at, category, author, title, img, content } = news[0];

    return (
        <div className="container">
            <div className={styles['single-news']}>
                <Breadcrumb title={title} pathname={pathname} />
                <h4>{category}</h4>
                <h3>{title}</h3>
                <h5>{author}</h5>
                <span>{created_at}</span>
                <img src={img[0]} alt={title} />
                <p>{content}</p>
            </div>
        </div>
    );
};
export default SingleNews;
