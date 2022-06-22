import Head from "next/head";

import Grid from "../components/functional/Grid";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import PostsPanel from "../components/PostsPanel";
import ExplorerPanel from "../components/ExplorePanel";
import ContactsPanel from "../components/ContactsPanel";

import styles from "../styles/index.module.sass";

export default function Home({ data }) {
    const { posts, contacts, currentUser, explorePosts } = data;
    return (
        <>
            <Head>
                <title>Post App</title>
            </Head>

            <div className={styles.container}>
                <NavBar userData={currentUser} />
                <Grid>
                    <ContactsPanel contacts={contacts} />
                    <PostsPanel posts={posts} />
                    <ExplorerPanel posts={explorePosts} />
                </Grid>

                <Footer />
            </div>
        </>
    );
}

export async function getServerSideProps(ctx) {
    // fecthing external data

    const lorem =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada congue nulla eget feugiat. Quisque sodales neque eget nibh egestas, sed ultrices dui consequat. Proin ac lorem lacus. Sed sodales blandit eros et volutpat. Suspendisse ultricies magna vitae consectetur malesuada. Curabitur vel ullamcorper nisl, vitae tempus eros. Praesent semper eget dolor vitae sodales.";

    const posts = [
        {
            title: "First Post",
            likes: 69,
            dislikes: 420,
            description: lorem,
            image: "post.jpg",
        },
        {
            title: "First Post",
            likes: 69,
            dislikes: 420,
            description: lorem,
            image: "post-2.jpg",
        },
        {
            title: "First Post",
            likes: 69,
            dislikes: 420,
            description: lorem,
            image: "post-3.jpg",
        },
        {
            title: "First Post",
            likes: 69,
            dislikes: 420,
            description: lorem,
            image: "post.jpg",
        },
    ];

    const currentUser = {
        name: "Yasiru",
        avatar: "profile_picture.jpg",
        username: "yasiru",
    };

    // Load contacts from https://jsonplaceholder.typicode.com/users

    const contacts = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    const explorePosts = await (
        await fetch("https://picsum.photos/v2/list")
    ).json();

    return {
        props: {
            data: {
                posts: posts,
                contacts: contacts,
                currentUser: currentUser,
                explorePosts: explorePosts,
            },
        },
    };
}
