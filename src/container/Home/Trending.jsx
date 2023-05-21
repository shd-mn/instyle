import Category from './Layouts/Category';

const Trending = ({ products, isLoading, error }) => {
    const trendingProducts = products
        .filter((product) => product.popular)
        .slice(0, products.length);
    return <Category sectionTitle="Trending Now" products={trendingProducts} />;
};
export default Trending;
