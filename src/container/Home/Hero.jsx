import React, { useState } from 'react';
import Slider from './Slider';

import styles from './Hero.module.scss';
function Hero() {
    const [index, setIndex] = useState(0);
    return (
        <section className={styles['hero-section']}>
            <Slider index={index} setIndex={setIndex} />
            <img
                className={styles['hero-bg-img']}
                src={require('../../assets/images/hero-bg.jpg')}
                alt=""
            />
        </section>
    );
}

export default Hero;
