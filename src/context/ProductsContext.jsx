import { createContext, useContext } from 'react';
import { useFetch } from '../hooks/useFetch';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const { data: products, isLoading, error } = useFetch('products', '*');

    const value = { products, isLoading, error };
    
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProductContext = () => useContext(ProductsContext);

export default ProductsProvider;
