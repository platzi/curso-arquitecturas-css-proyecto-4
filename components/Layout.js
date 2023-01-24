import Head from "next/head"
import { Header } from "./Header"
import { Footer } from "./Footer"
import styles from "../styles/Layout.module.scss"

export const Layout = ( {children} ) => {

    return (
        <div className={styles.layout}>
            <Head>
                <title>Beautiful Places</title>
                <meta property="og:title" content="Beautiful Places" key="title" />
                <meta name='type' property='og:type' content='website' />
                <meta name='image' property='og:image' content='https://places.sandrosimon.com/images/preview.jpg' />
                <meta name='url' property='og:url' content='https://places.sandrosimon.com' />
                <meta name="description" property='og:description' content="Places is a website where you can look for a place to stay by yourself or with your family and reserve the one you like." />
            </Head>
            <div className={styles.placeholder}></div>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
         </div>

    )

}