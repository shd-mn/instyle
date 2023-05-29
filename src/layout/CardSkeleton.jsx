import Skeleton from 'react-loading-skeleton';
const CardSkeleton = ({ count }) => {
    return (
        <div className="skeleton-container">
            {Array(count)
                .fill(0)
                .map((_, index) => (
                    <div key={index}>
                        <div className="skeleton">
                            <Skeleton
                                containerClassName="flex-1"
                                height={350}
                                width="100%"
                            />
                        </div>
                        <div className="skeleton skleton-text">
                            <Skeleton
                                containerClassName="flex-1"
                                height={20}
                                width="60%"
                            />
                        </div>
                        <div className="skeleton skleton-text">
                            <Skeleton
                                containerClassName="flex-1"
                                height={20}
                                width={160}
                            />
                        </div>
                    </div>
                ))}
        </div>
    );
};
export default CardSkeleton;
