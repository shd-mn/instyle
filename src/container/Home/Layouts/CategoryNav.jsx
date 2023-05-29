import CategoryButtons from './CategoryButtons';
const CategoryNav = ({ sectionTitle, selected, handleCategory }) => {
    return (
        <div className="category-nav">
            <div>
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
