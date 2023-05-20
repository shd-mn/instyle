import React from 'react';
import PageTitle from '../layout/PageTitle';
import { useLocation } from 'react-router-dom';
import Products from '../container/Products/Products';
import { useMyContext } from '../context/MainContext';
const Women = () => {
    const { pathname } = useLocation();
    const { products } = useMyContext();
    const womenProducts = products.filter(
        (product) => product.category === 'women'
    );
    return (
        <div>
            <PageTitle title="Women" pathname={pathname} />
            <Products products={womenProducts} />
        </div>
    );
};

export default Women;
