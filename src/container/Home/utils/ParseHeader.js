import { changeSlide } from './changeSlide';
export const ParseHeader = (str, itemIndex) => {
    const [h1, strong, ...other] = str.split(' ');
    return (
        <h1
            className={`heading-primary ${
                changeSlide(itemIndex) === 'activeSlide' ? 'h1animation' : null
            }`}
        >
            {h1} <strong>{strong} </strong> {other}
        </h1>
    );
};
