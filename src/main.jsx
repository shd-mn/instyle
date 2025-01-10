import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainProvider from './context/MainContext';
import ProductsProvider from './context/ProductsContext';
import App from './App';
import CartProvider from './context/CartContext';
import './global.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </MainProvider>
  </StrictMode>
);
