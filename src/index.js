import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import MainProvider from '../src/context/MainContext';
import ProductsProvider from './context/ProductsContext';
import App from './App';
import CartProvider from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MainProvider>
            <ProductsProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </ProductsProvider>
        </MainProvider>
    </React.StrictMode>
);
