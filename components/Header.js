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
                    src='/images/logo.png'
                    alt="Peruvian Beaches"
                    width={2000}
                    height={2000} 
                    priority={true}
                />
            </Link>
        </header>    
    );
}