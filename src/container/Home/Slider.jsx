import React, { useState, useEffect } from 'react';
import { collections } from './data/collections';
import { ParseHeader } from './utils/ParseHeader';
import { changeSlide } from './utils/changeSlide';
import { Link } from 'react-router-dom';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

import styles from './Hero.module.scss';
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
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const handlePrevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(collections.length - 1);
    }
  };

  const handleNextSlide = () => {
    if (index < collections.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

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
            <figure className={styles['slider-img-box']}>
              <img src={src} alt={header} />
            </figure>
            <button
              className={styles.prev}
              type='button'
              onClick={() => handlePrevSlide()}
            >
              <HiOutlineChevronLeft />
            </button>
            <div className={styles['slider-text-box']}>
              <h2
                className={
                  styles[
                    changeSlide(itemIndex, index) === 'activeSlide'
                      ? 'h2animation'
                      : null
                  ]
                }
              >
                COLLECTION
              </h2>
              <h1
                className={`h1 ${
                  styles[
                    changeSlide(itemIndex, index) === 'activeSlide'
                      ? 'h1animation'
                      : null
                  ]
                }`}
              >
                {ParseHeader(header, itemIndex)}
              </h1>

              <p
                className={`${styles.description} ${
                  styles[
                    changeSlide(itemIndex, index) === 'activeSlide'
                      ? 'descAnimation'
                      : null
                  ]
                }`}
              >
                {description}
              </p>
              <Link
                to='/women'
                className={`btn ${
                  styles[
                    changeSlide(itemIndex, index) === 'activeSlide'
                      ? 'btnAnimation'
                      : null
                  ]
                }`}
              >
                SHOP NOW
              </Link>
            </div>
          </article>
        );
      })}
      <button
        className={styles.next}
        type='button'
        onClick={() => handleNextSlide()}
      >
        <HiOutlineChevronRight />
      </button>

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
            className={`${styles['slider-btn']} ${styles[activeBtn]}`}
            onClick={() => setIndex(itemIndex)}
          ></button>
        );
      })}
    </div>
  );
};

export default Slider;
