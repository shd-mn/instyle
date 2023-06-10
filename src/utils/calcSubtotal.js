export const calcSubtotal = (cart) => {
    return cart.reduce(
        (acc, item) => (acc += (item.price + item.sale) * item.quantity),
        0
    );
};
