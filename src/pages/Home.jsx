import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import About from '../components/home/About';
import WhyRuhaam from '../components/home/WhyRuhaam';
import Founders from '../components/home/Founders';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
    return (
        <main>
            <Hero />
            <FeaturedProducts />
            <About />
            <WhyRuhaam />
            <Founders />
            <Testimonials />
        </main>
    );
};

export default Home;
