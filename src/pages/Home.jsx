import React from 'react';
import Hero from '../container/Home/Hero';
import Feature from '../container/Home/Feature';
import Trending from '../container/Home/Trending';
import NewsSection from '../container/Home/NewsSection';
import NewProducts from '../container/Home/NewProducts';
import CategoryBanner from '../container/Home/CategoryBanner';

const Home = () => {
    return (
        <main>
            <Hero />
            <CategoryBanner />
            <Trending />
            <NewProducts />
            <NewsSection />
            <Feature />
        </main>
    );
};

export default Home;
