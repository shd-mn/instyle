import { useRef, useState } from 'react';
import styles from './ImageGalery.module.scss';

const ImageGalery = ({ url, name }) => {
    const [selected, setSelected] = useState(0);

    const zoom = useRef();
    const prevBox = useRef();

    const imageZoom = (e) => {
        const target = e.target.getBoundingClientRect();

        const startX = e.clientX - e.target.getBoundingClientRect().x;
        const startY = e.clientY - e.target.getBoundingClientRect().y;

        prevBox.current.style.left = `${target.width}px`;
        prevBox.current.style.width = `${target.width * 1.5}px`;
        prevBox.current.style.height = `${target.height}px`;

        zoom.current.style.width = `${target.width * 3}px`;
        zoom.current.style.height = `${target.height * 3}px`;

        zoom.current.style.left = `${-startX * 1.5}px`;
        zoom.current.style.top = `${-startY * 2}px`;
    };

    return (
        <div className={styles.galery}>
            <div className={styles.image}>
                <img
                    onMouseMove={(e) => imageZoom(e)}
                    src={url[selected]}
                    alt={name}
                />
                <div ref={prevBox} className={styles.zoom}>
                    <img ref={zoom} src={url[selected]} alt={name} />
                </div>
            </div>
            <div>
                {url.map((img, idx) => (
                    <button
                        key={idx}
                        className={`${styles['img-btn']} ${
                            selected === idx && styles.active
                        }`}
                        onClick={() => setSelected(idx)}
                        type="button"
                    >
                        <img src={img} alt={name} />
                    </button>
                ))}
            </div>
        </div>
    );
};
export default ImageGalery;
