import { Routes } from 'react-router-dom';
import MainProvider from '../src/context/MainContext';
import Header from './layout/Header';
import Home from './pages/Home';
import Women from './pages/Women';
import { Route } from 'react-router-dom';

function App() {
    return (
        <MainProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/women" element={<Women />} />
            </Routes>
        </MainProvider>
    );
}

export default App;
