import MainProvider from '../src/context/MainContext';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './layout/Header';
import Home from './pages/Home';
import Women from './pages/Women';
import SingleProduct from './pages/SingleProduct';
import NewsPage from './pages/NewsPage';
import SingleNews from './container/News/SingleNews';
import NotFound from './pages/NotFound';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';

function App() {
    return (
        <MainProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/women" element={<Women />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/news">
                    <Route index element={<NewsPage />} />
                    <Route path=":id" element={<SingleNews />} />
                </Route>
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </MainProvider>
    );
}

export default App;
