import { calcSubtotal } from '../utils/calcSubtotal';
import {
    GET_CART,
    ADD_TO_CART,
    UPTADE_CART,
    TOGGLE_CART,
    CLEAR_CART,
    REMOVE_CART_ITEM,
} from './actions';

export const cartReducer = (state, action) => {
    switch (action.type) {
        case GET_CART:
            const subtotal = calcSubtotal(action.payload);

            return { ...state, cart: action.payload, subtotal };

        case ADD_TO_CART: {
            const { product, quantity, selectedColor, selectedSize } =
                action.payload;

            const checkCartItem = state.cart.some(
                (item) => item.id === product.id
            );
            let newCart;
            if (!checkCartItem) {
                newCart = [
                    ...state.cart,
                    { ...product, quantity, selectedColor, selectedSize },
                ];
            } else {
                newCart = state.cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity, selectedColor, selectedSize }
                        : item
                );
            }

            localStorage.setItem('cart', JSON.stringify(newCart));
            return { ...state, cart: newCart };
        }

        case UPTADE_CART: {
            const subtotal = calcSubtotal(action.payload);
            localStorage.setItem('cart', JSON.stringify(action.payload));
            return { ...state, cart: action.payload, subtotal };
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

        case REMOVE_CART_ITEM: {
            const newCart = state.cart.filter(
                (item) => item.id !== action.payload
            );
            const subtotal = calcSubtotal(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return { ...state, cart: newCart, subtotal };
        }

        case CLEAR_CART: {
            localStorage.setItem('cart', JSON.stringify([]));
            return { ...state, cart: [], subtotal: 0 };
        }

        default:
            throw new Error('Unsupported action type');
    }
};
