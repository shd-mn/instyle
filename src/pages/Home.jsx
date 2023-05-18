import React from 'react';
import Hero from '../container/Home/Hero';
import Feature from '../container/Home/Feature';
import Trending from '../container/Home/Trending';
import NewsSection from '../container/Home/NewsSection';

const Home = () => {
    return (
        <main>
            <Hero />
            <Feature />
            <Trending />
            <NewsSection />
        </main>
    );
};

export default Home;
