import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const FilterSkleton = ({ count }) => {
    return Array(count)
        .fill(0)
        .map((_, index) => (
            <div key={index}>
                <div className="skeleton">
                    <Skeleton
                        containerClassName="flex-1"
                        width={120}
                        height={20}
                    />
                </div>
                <div className="skeleton skleton-text">
                    <Skeleton
                        containerClassName="flex-1"
                        style={{ marginBottom: '1rem', marginLeft: '2rem' }}
                        count={4}
                        width="150px"
                        height={15}
                    />
                </div>
            </div>
        ));
};
export default FilterSkleton;
