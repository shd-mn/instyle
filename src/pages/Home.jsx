import React from 'react';
import Hero from '../container/Home/Hero';
import Feature from '../container/Home/Feature';
import Trending from '../container/Home/Trending';
import NewsSection from '../container/Home/NewsSection';
import NewProducts from '../container/Home/NewProducts';
import { useFetch } from '../hooks/useFetch';

const Home = () => {
    const { data: products, isLoading, error } = useFetch('products', '*');
    const { data: news } = useFetch('news', '*');
    return (
        <main>
            <Hero />
            <Feature />
            <Trending products={products} isLoading={isLoading} error={error} />
            <NewProducts
                products={products}
                isLoading={isLoading}
                error={error}
            />
            <NewsSection news={news} />
        </main>
    );
};

export default Home;
