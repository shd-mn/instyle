import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Home from './pages/Home';
import Women from './pages/Women';
import SingleProduct from './pages/SingleProduct';
import NewsPage from './pages/NewsPage';
import SingleNews from './container/News/SingleNews';
import NotFound from './pages/NotFound';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import Footer from './layout/Footer';

function App() {
    return (
        <Router>
            <Header />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/women">
                    <Route index element={<Women />} />
                    <Route path=":id" element={<SingleProduct />} />
                </Route>
                <Route path="/news">
                    <Route index element={<NewsPage />} />
                    <Route path=":id" element={<SingleNews />} />
                </Route>
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
