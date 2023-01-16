import React, { useState, useEffect } from 'react';

const collections = [
    {
        id: 1,
        header: 'Exclusive Winter',
        description:
            "New Modern Stylist Fashionable Women's Wear holder bag holder.",
        src: require('../../assets/images/header-slider-img1.png'),
    },
    {
        id: 2,
        header: 'Exclusive Winter Season',
        description:
            "New Modern Stylist Fashionable Women's Wear bag holder.",
        src: require('../../assets/images/header-slider-img2.png'),
    },
    {
        id: 3,
        header: 'Exclusive Winter',
        description:
            "New Modern Stylist Women's Wear bag holder.",
        src: require('../../assets/images/header-slider-img3.png'),
    },
];

function Slider() {

    const [index, setIndex] = useState(0)
    const changePosition = (itemIndex) => {
        let position = 'nextSlide'
        if (itemIndex === index) {
            position = 'activeSlide'
        } else if (itemIndex === index - 1 || (index === 0 && itemIndex === collections.length - 1)) {
            position = 'lastSlide'
        }
        return position;
    }
    const ParseHeader = (str, itemIndex) => {
        const [h1, strong, ...other] = str.split(' ');
        return (
            <h1 className={`heading-primary ${(changePosition(itemIndex) === "activeSlide") ? "h1animation" : null}`}>
                {h1} <strong>{strong} </strong> {other}
            </h1>
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                prevIndex = index + 1;
                if (prevIndex > collections.length - 1) {
                    prevIndex = 0;
                }
                return prevIndex;
            })
        }, 3000)
        return () => clearInterval(interval);
    }, [index])

    return (
        <>
            {collections.map((item, itemIndex) => {
                const { id, header, description, src } = item;

                return <article
                    key={id}
                    className={`slider ${changePosition(itemIndex)}`}
                    id={'slider' + id}
                >
                    <div className="slider-text-box">
                        <h2 className={(changePosition(itemIndex) === "activeSlide") ? "h2animation" : null}>COLLECTION</h2>
                        {ParseHeader(header, itemIndex)}
                        <p className={`description ${(changePosition(itemIndex) === "activeSlide") ? "descAnimation" : null}`}>{description}</p>
                        <a href="#ff" className={`btn ${(changePosition(itemIndex) === "activeSlide") ? "btnanimation" : null}`}>
                            SHOP NOW
                        </a>
                    </div>
                    <figure className="slider-img-box">
                        <img src={src} alt="winter collections" />
                    </figure>

                </article>
            })}

            <div className="slider-btn-group">
                {collections.map((item, itemIndex) => {
                    let activeBtn = ''
                    if (index === itemIndex) {
                        activeBtn = 'active'
                    } else if (index === itemIndex - 1) {
                        activeBtn = ''
                    }
                    return <button key={item.id} className={`slider-btn ${activeBtn}`} onClick={() => setIndex(itemIndex)}></button>

                }
                )
                }
            </div>
        </>
    );
}

export default Slider;
