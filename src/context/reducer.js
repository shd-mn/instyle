import {
    GET_NEWS,
    SET_LOADING,
    TOGGLE_WISHLIST,
    GET_WISHLIST,
    TOGGLE_FILTER,
    SHOW_SIDEBAR,
    CLEAR_FILTER,
    RANGE_FILTER,
} from './actions';
export const reducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: true };

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

        case TOGGLE_FILTER: {
            const { title, item } = action.payload;

            let filter = {};
            let arr = [];
            if (state.isChecked[title]) {
                if (item === 'all') {
                    arr = [];
                } else if (state.isChecked[title].includes(item)) {
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

        case RANGE_FILTER: {
            return {
                ...state,
                rangeFilter: {
                    min: +action.payload.min,
                    max: +action.payload.max,
                },
            };
        }
        case CLEAR_FILTER: {
            let rangeMax;
            if (document.querySelector('#range-slider')) {
                rangeMax = document
                    .querySelector('#range-slider')
                    .getElementsByTagName('input')[1].max;
            } else {
                rangeMax = 0;
            }

            return {
                ...state,
                isChecked: {
                    size: [],
                    color: [],
                    subcategory: [],
                },
                rangeFilter: {
                    min: 0,
                    max: +rangeMax,
                },
            };
        }
        case SHOW_SIDEBAR: {
            return { ...state, isSidebarShow: action.payload };
        }
        default:
            throw new Error('Unsupported action type');
    }
};
