import Script from "next/script";
import "../styles/_app.sass";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script
                src='https://kit.fontawesome.com/1f97a9749c.js'
                crossOrigin='anonymous'
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
