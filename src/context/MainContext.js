import { createContext, useContext, useEffect, useReducer } from 'react';
import {
    GET_WISHLIST,
    TOGGLE_WISHLIST,
    TOGGLE_FILTER,
    SHOW_SIDEBAR,
    CLEAR_FILTER,
    SHOW_MODAL,
    CLOSE_MODAL,
} from './actions';
import { reducer } from './reducer';

const MainContext = createContext();
const initialState = {
    news: [],
    isLoading: false,
    error: '',
    currency: 'USD',
    wishlist: [],
    isSidebarShow: false,
    isModalShow: false,
    modalContent: {},
    isChecked: {
        size: [],
        color: [],
        subcategory: [],
    },
    rangeFilter: {
        min: 0,
        max: 0,
    },
};

const MainProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleWishlist = (e, product) => {
        e.preventDefault();
        dispatch({ type: TOGGLE_WISHLIST, payload: product });
    };

    useEffect(() => {
        if (localStorage.getItem('wishlist')) {
            dispatch({
                type: GET_WISHLIST,
                payload: JSON.parse(localStorage.getItem('wishlist')),
            });
        }
    }, []);

    const filterProducts = (title, item) => {
        dispatch({ type: TOGGLE_FILTER, payload: { title, item } });
    };

    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER, payload: {} });
    };

    const showSidebar = () => {
        dispatch({ type: SHOW_SIDEBAR, payload: true });
    };
    const closeSidebar = () => {
        dispatch({ type: SHOW_SIDEBAR, payload: false });
    };

    const openModal = (product) => {
        console.log(product);
        dispatch({ type: SHOW_MODAL, payload: product });
    };

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL });
    };

    const handleScroll = () => {
        if (state.isSidebarShow) {
            closeSidebar();
        }
        if (state.isModalShow) {
            closeModal();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const value = {
        ...state,
        dispatch,

        toggleWishlist,
        filterProducts,
        clearFilter,
        showSidebar,
        closeSidebar,
        openModal,
        closeModal,
    };

    return (
        <MainContext.Provider value={value}>{children}</MainContext.Provider>
    );
};

export const useMyContext = () => useContext(MainContext);

export default MainProvider;
