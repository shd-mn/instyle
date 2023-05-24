import { IoStarOutline, IoStarHalfOutline, IoStarSharp } from 'react-icons/io5';

export const StarRating = (stars) => {
    const tempStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5;
        return (
            <span key={index}>
                {stars > number ? (
                    <IoStarSharp fill="#FFD700" stroke="#FFD700" />
                ) : stars > index ? (
                    <IoStarHalfOutline fill="#FFD700" stroke="#FFD700" />
                ) : (
                    <IoStarOutline fill="#FFD700" stroke="#FFD700" />
                )}
            </span>
        );
    });
    return <>{tempStars}</>;
};
