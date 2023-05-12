export const convertCurrency = (price, currency) => {
    if (currency === 'USD') {
        return price.toFixed(2);
    } else if (currency === 'AZN') {
        return (price * 1.7).toFixed(2);
    }
};
