import { createContext, useContext, useState } from 'react';
// import axios from 'axios';
const MainContext = createContext();

const MainProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    /* useEffect(() => {
        axios
            .get('http://localhost:3010/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }, []); */

    const data = {
        products,
        setProducts,
    };

    return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export const useProduct = () => useContext(MainContext);

export default MainProvider;