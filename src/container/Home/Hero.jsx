import Slider from './Slider';

import styles from './Hero.module.scss';
function Hero() {
    return (
        <section className={styles['hero-section']}>
            <Slider />
        </section>
    );
}

export default Hero;
