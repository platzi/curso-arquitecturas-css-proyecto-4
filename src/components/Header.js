import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.scss'

export const Header = () => {

    return (

        <header className={styles.header}>
            <Link
                href="/"
                className={styles.logoContainer}
            >
                <Image 
                    className={styles.logo}
                    src='/src/images/imagen-logo.png'
                    alt="Beautiful Places"
                    width={1000}
                    height={1000} 
                    priority={true}
                />
                <h1>Beautiful Places</h1>
            </Link>
        </header>    
    );
}