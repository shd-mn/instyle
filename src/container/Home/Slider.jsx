import React, { useState, useEffect } from 'react';
import { collections } from './data/collections.js';
import styles from './Hero.module.scss';
import { ParseHeader } from './utils/ParseHeader.js';
import { changeSlide } from './utils/changeSlide.js';
function Slider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                prevIndex = index + 1;
                if (prevIndex > collections.length - 1) {
                    prevIndex = 0;
                }
                return prevIndex;
            });
        }, 7000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <>
            {collections.map((item, itemIndex) => {
                const { id, header, description, src } = item;

                return (
                    <article
                        key={id}
                        className={`${styles.slider} ${
                            styles[changeSlide(itemIndex, index)]
                        }`}
                        id={'slider' + id}
                    >
                        <div className={styles['slider-text-box']}>
                            <h2
                                className={
                                    styles[changeSlide(itemIndex, index) ===
                                    'activeSlide'
                                        ? 'h2animation'
                                        : null]
                                }
                            >
                                COLLECTION
                            </h2>
                            {ParseHeader(header, itemIndex)}
                            <p
                                className={`${styles.description} ${
                                    styles[
                                        changeSlide(itemIndex, index) ===
                                        'activeSlide'
                                            ? 'descAnimation'
                                            : null
                                    ]
                                }`}
                            >
                                {description}
                            </p>
                            <a
                                href="#ff"
                                className={`btn ${
                                    styles[
                                        changeSlide(itemIndex, index) ===
                                        'activeSlide'
                                            ? 'btnanimation'
                                            : null
                                    ]
                                }`}
                            >
                                SHOP NOW
                            </a>
                        </div>
                        <figure className={styles['slider-img-box']}>
                            <img src={src} alt="winter collections" />
                        </figure>
                    </article>
                );
            })}

            <SliderButtons index={index} setIndex={setIndex} />
        </>
    );
}
const SliderButtons = ({ index, setIndex }) => {
    return (
        <div className={styles['slider-btn-group']}>
            {collections.map((item, itemIndex) => {
                let activeBtn = '';
                if (index === itemIndex) {
                    activeBtn = 'active';
                } else if (index === itemIndex - 1) {
                    activeBtn = '';
                }
                return (
                    <button
                        key={item.id}
                        className={`${styles['slider-btn']} ${styles.activeBtn}`}
                        onClick={() => setIndex(itemIndex)}
                    ></button>
                );
            })}
        </div>
    );
};

export default Slider;
