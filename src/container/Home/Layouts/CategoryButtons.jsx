import styles from './CategoryButtons.module.scss';

const CategoryButtons = ({ selected, handleCategory }) => {
    const category = ['all', 'women', 'men', 'baby'];

    return (
        <div className={styles['category-btn-group']}>
            {category.map((item, idx) => (
                <button
                    key={idx}
                    className={`link ${selected === item && styles.active}`}
                    type="button"
                    onClick={(e) => handleCategory(e, item)}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};
export default CategoryButtons;
