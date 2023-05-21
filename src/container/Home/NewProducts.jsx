import Category from './Layouts/Category';
const NewProducts = ({ products, isLoading, error }) => {
    const newProducts = products
        .filter((product) => product.new)
        .slice(0, products.length);
    return <Category sectionTitle="New Product" products={newProducts} />;
};
export default NewProducts;
