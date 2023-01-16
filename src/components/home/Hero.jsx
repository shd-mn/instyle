import React, {useState} from 'react';
import Slider from './Slider';

function Hero() {
    const [index, setIndex] = useState(0);
    return (
        <section className="hero-section">
            <Slider index={index} setIndex={setIndex} />
            <img className='hero-bg-img' src={require('../../assets/images/hero-bg.jpg')} alt="" />
        </section>
    );
}

export default Hero;
