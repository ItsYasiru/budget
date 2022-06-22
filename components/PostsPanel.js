import Image from "next/image";
import styles from "./PostsPanel.module.sass";

function NewPost() {
    return (
        <div className={styles.NewPost}>
            <h1>New Post</h1>
            <form>
                <input type='text' placeholder='Title' />
                <textarea placeholder='Write something...' />
                <label htmlFor='post-image'>
                    Select image
                    <input id='post-image' type='file' />
                </label>
                <input type='submit' />
            </form>
        </div>
    );
}

function Post({ post }) {
    const { title, likes, dislikes, description, image } = post;

    function removePost() {
        // fetch("/api/posts/" + postId, {method: "DELETE"})
    }

    return (
        <div className={styles.Post}>
            <div className={styles.imageContainer}>
                <Image
                    alt={title}
                    src={`/cdn/posts/${image}`}
                    layout='fill'
                    objectFit='cover'
                />
            </div>

            <h2>{title}</h2>
            <p>{description}</p>

            <div className={styles.actionsRail}>
                <span className={styles.left}>
                    <button onClick={removePost}>
                        <i className='fa-solid fa-trash-can' />
                        Remove
                    </button>
                </span>

                <span className={styles.right}>
                    <button>
                        <i className='fa-solid fa-thumbs-up' />
                        <label>{likes}</label>
                    </button>
                    <button>
                        <i className='fa-solid fa-thumbs-down' />
                        <label>{dislikes}</label>
                    </button>
                </span>
            </div>
        </div>
    );
}

function PostsContainer({ posts }) {
    return (
        <div className={styles.PostsContainer}>
            <div>
                <h1>My Posts</h1>
            </div>
            {posts.map((post, i) => (
                <Post key={i} post={post} />
            ))}
        </div>
    );
}

function PostsPanel({ posts }) {
    return (
        <div className={styles.PostsPanel}>
            <NewPost />
            <PostsContainer posts={posts} />
        </div>
    );
}

export default PostsPanel;
