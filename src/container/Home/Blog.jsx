import styles from './Blog.module.scss';
const Blog = () => {
    return (
        <section className={styles.blog}>
            <div className="container">
                <h2 className="h2">Latest News</h2>
                <div className={styles['blog-content']}>
                    <article>
                        
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Blog;
