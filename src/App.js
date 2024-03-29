import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import Baby from './pages/Baby';
import SingleProduct from './pages/SingleProduct';
import NewsPage from './pages/NewsPage';
import SingleNews from './container/News/SingleNews';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import Footer from './layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProductModal from './layout/ProductModal';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/women">
                    <Route index element={<Women />} />
                    <Route path=":id" element={<SingleProduct />} />
                </Route>
                <Route path="/men">
                    <Route index element={<Men />} />
                    <Route path=":id" element={<SingleProduct />} />
                </Route>
                <Route path="/baby">
                    <Route index element={<Baby />} />
                    <Route path=":id" element={<SingleProduct />} />
                </Route>
                <Route path="/news">
                    <Route index element={<NewsPage />} />
                    <Route path=":id" element={<SingleNews />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <ProductModal />
            <Footer />
        </Router>
    );
}

export default App;
