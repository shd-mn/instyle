import { createContext, useContext, useEffect, useReducer } from 'react';
import { TOGGLE_CART, DISPLAY_ITEMS, GET_DATA, GET_NEWS } from './actions';
import { reducer } from './reducer';

import { useFetch } from '../hooks/useFetch';

const MainContext = createContext();
const initialState = {
    products: [],
    news: [],
    isLoading: false,
    currency: 'USD',
    cart: [],
};

const MainProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { data: products, isLoading } = useFetch('products');
    const { data: news } = useFetch('news');

    useEffect(() => {
        dispatch({ type: GET_DATA, payload: products });
        dispatch({ type: GET_NEWS, payload: news });
    }, [products, news]);

    const toggleCart = (e, product) => {
        e.preventDefault();
        dispatch({ type: TOGGLE_CART, payload: product });
    };

    useEffect(() => {
        if (localStorage.getItem('cart')) {
            dispatch({
                type: DISPLAY_ITEMS,
                payload: JSON.parse(localStorage.getItem('cart')),
            });
        }
    }, []);

    const trendingProducts = state.products.slice(0, state.products.length);
    const newProducts = state.products
        .filter((product) => product.new)
        .slice(0, state.products.length);

    const value = {
        ...state,
        toggleCart,
        trendingProducts,
        newProducts,
    };

    return (
        <MainContext.Provider value={value}>{children}</MainContext.Provider>
    );
};

export const useMyContext = () => useContext(MainContext);

export default MainProvider;
