import Image from "next/image";

import styles from "./ExplorePanel.module.sass";

function ExplorePost({ post }) {
    const { author, download_url } = post;

    return (
        <div className={styles.ExplorePost}>
            <a href='#somepost'>
                <div className={styles.imageContainer}>
                    <Image
                        alt={author}
                        src={download_url}
                        layout='fill'
                        objectFit='cover'
                    />

                    <label>Post by - {author}</label>
                </div>
            </a>
        </div>
    );
}

function ExplorePanel({ posts }) {
    return (
        <div className={styles.ExplorePanel}>
            <h1>Lorem Picsum Posts</h1>
            <div className={styles.inner}>
                {posts.map((post, i) => (
                    <ExplorePost key={i} post={post} />
                ))}
            </div>
        </div>
    );
}

export default ExplorePanel;
