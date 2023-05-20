import { useMyContext } from '../../context/MainContext';
import Category from './Layouts/Category';

const Trending = () => {
    const { trendingProducts } = useMyContext();
    return <Category sectionTitle="Trending Now" products={trendingProducts} />;
};
export default Trending;
