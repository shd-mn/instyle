import { IoStarOutline, IoStarHalfOutline, IoStarSharp } from 'react-icons/io5';

export const StarRating = (rating) => {
    const MAX_RATING = 5;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = MAX_RATING - filledStars - (hasHalfStar ? 1 : 0);

    return (
        <span>
            {/* Filled stars */}
            {Array(filledStars).fill(
                <IoStarSharp fill="#FFD700" stroke="gray" />
            )}

            {/* Half star */}
            {hasHalfStar && <IoStarHalfOutline fill="#FFD700" stroke="gray" />}

            {/* Empty stars */}
            {Array(emptyStars).fill(
                <IoStarOutline fill="#FFD700" stroke="gray" />
            )}
        </span>
    );
};
