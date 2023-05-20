import {
    GET_DATA,
    GET_NEWS,
    TOGGLE_CART,
    SET_LOADING,
    DISPLAY_ITEMS,
} from './actions';
export const reducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: true };
        case DISPLAY_ITEMS:
            return { ...state, cart: action.payload };
        case GET_DATA: {
            return { ...state, products: action.payload, isLoading: false };
        }
        case GET_NEWS: {
            return { ...state, news: action.payload };
        }
        case TOGGLE_CART: {
            const checkCartItem = state.cart.some(
                (item) => item.id === action.payload.id
            );
            let newCart;
            if (checkCartItem) {
                newCart = state.cart.filter(
                    (item) => item.id !== action.payload.id
                );
            } else {
                newCart = [...state.cart, action.payload];
            }

            localStorage.setItem('cart', JSON.stringify(newCart));
            return { ...state, cart: newCart };
        }
        default:
            throw new Error('Unsupported action type');
    }
};
