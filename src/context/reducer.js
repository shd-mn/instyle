import {
    GET_NEWS,
    GET_CART,
    TOGGLE_CART,
    SET_LOADING,
    TOGGLE_WISHLIST,
    GET_WISHLIST,
    TOGGLE_FILTER,
    ADD_TO_CART,
} from './actions';
export const reducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: true };

        case GET_CART:
            return { ...state, cart: action.payload };
        case GET_WISHLIST:
            return { ...state, wishlist: action.payload };

        case GET_NEWS: {
            return { ...state, news: action.payload };
        }

        case TOGGLE_WISHLIST: {
            const checkCartItem = state.wishlist.some(
                (item) => item.id === action.payload.id
            );
            let newCart;
            if (checkCartItem) {
                newCart = state.wishlist.filter(
                    (item) => item.id !== action.payload.id
                );
            } else {
                newCart = [...state.wishlist, action.payload];
            }

            localStorage.setItem('wishlist', JSON.stringify(newCart));
            return { ...state, wishlist: newCart };
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

        case ADD_TO_CART: {
            const checkCartItem = state.cart.some(
                (item) => item.id === action.payload.id
            );
            let newCart;
            if (!checkCartItem) {
                newCart = [...state.cart, action.payload];
            } else {
                newCart = [...state.cart];
            }

            localStorage.setItem('cart', JSON.stringify(newCart));
            return { ...state, cart: newCart };
        }

        case TOGGLE_FILTER: {
            const { title, item } = action.payload;

            let filter = {};
            let arr = [];
            if (state.isChecked[title]) {
                if (state.isChecked[title].includes(item)) {
                    arr = state.isChecked[title].filter(
                        (value) => value !== item
                    );
                } else {
                    arr = [...state.isChecked[title], item];
                }

                const { ...rest } = state.isChecked;
                filter = rest;
                filter[title] = arr;
            } else {
                if (Object.keys(state.isChecked).length === 0) {
                    filter[title] = [item];
                } else {
                    const { ...rest } = state.isChecked;
                    filter = rest;
                    filter[title] = [item];
                }
            }

            return { ...state, isChecked: filter };
        }
        default:
            throw new Error('Unsupported action type');
    }
};
