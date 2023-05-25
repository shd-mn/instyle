import styles from './Category.module.scss';
import CategoryButtons from './CategoryButtons';
const CategoryNav = ({ sectionTitle, selected, handleCategory }) => {
    return (
        <div className="category-nav">
            <div className={styles['section-title']}>
                <h3>{sectionTitle}</h3>
            </div>
            {sectionTitle !== 'Related Products' && (
                <CategoryButtons
                    selected={selected}
                    handleCategory={handleCategory}
                />
            )}
        </div>
    );
};
export default CategoryNav;
