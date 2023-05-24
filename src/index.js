import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import MainProvider from '../src/context/MainContext';
import ProductsProvider from './context/ProductsContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MainProvider>
            <ProductsProvider>
                <App />
            </ProductsProvider>
        </MainProvider>
    </React.StrictMode>
);
