import { createContext, useContext, useEffect, useReducer } from 'react';
import {
    GET_CART,
    ADD_TO_CART,
    UPTADE_CART,
    TOGGLE_CART,
    CLEAR_CART,
    REMOVE_CART_ITEM,
} from './actions';

import { cartReducer } from './cartReducer';

const CartContext = createContext();

const initialState = {
    cart: [],
    subtotal: 0,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        if (localStorage.getItem('cart')) {
            dispatch({
                type: GET_CART,
                payload: JSON.parse(localStorage.getItem('cart')),
            });
        }
    }, []);

    const addToCart = (product) => {
        dispatch({ type: ADD_TO_CART, payload: product });
    };

    const updateCart = (cartItems) => {
        dispatch({ type: UPTADE_CART, payload: cartItems });
    };

    const toggleCart = (e, product) => {
        e.preventDefault();
        const cartItem = {
            ...product,
            quantity: 1,
            selectedColor: product.color[0],
            selectedSize: product.size[0],
        };
        dispatch({ type: TOGGLE_CART, payload: cartItem });
    };

    const removeCartItem = (id) => {
        dispatch({ type: REMOVE_CART_ITEM, payload: id });
    };
    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const value = {
        ...state,
        dispatch,
        addToCart,
        updateCart,
        toggleCart,
        removeCartItem,
        clearCart,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);

export default CartProvider;
