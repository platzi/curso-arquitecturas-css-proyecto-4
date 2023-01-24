import { Header } from "./Header"
import { Footer } from "./Footer"
import styles from "../styles/Layout.module.scss"

export const Layout = ( {children} ) => {

    return (
        <div className={styles.layout}>
            <div className={styles.placeholder}></div>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
         </div>

    )

}