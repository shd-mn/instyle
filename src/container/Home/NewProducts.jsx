import { useMyContext } from '../../context/MainContext';
import Category from './Layouts/Category';
const NewProducts = () => {
    const { newProducts } = useMyContext();
    return <Category sectionTitle="New Product" products={newProducts} />;
};
export default NewProducts;
