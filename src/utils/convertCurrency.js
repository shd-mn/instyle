export const convertCurrency = (price, currency) => {
    if (currency === 'USD') {
        return <span>{price.toFixed(2)} $</span>;
    } else if (currency === 'AZN') {
        return <span>{(price * 1.7).toFixed(2)} ₼</span>;
    }
};
