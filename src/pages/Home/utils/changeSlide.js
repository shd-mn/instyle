import { collections } from '../data/collections';
export const changeSlide = (itemIndex, index) => {
    let position = 'nextSlide';
    if (itemIndex === index) {
        position = 'activeSlide';
    } else if (
        itemIndex === index - 1 ||
        (index === 0 && itemIndex === collections.length - 1)
    ) {
        position = 'lastSlide';
    }
    return position;
};
