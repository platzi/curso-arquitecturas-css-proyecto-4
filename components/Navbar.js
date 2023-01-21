import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.scss'

export const Navbar = () => {

    return (

        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link href="/">
                    <div className={styles.logoContainer}>
                        <Image 
                            src='/images/logo.png'
                            alt="Peruvian Beaches"
                            width={2000}
                            height={2000} 
                            className={styles.logo}
                            priority={true}
                        />
                        
                    </div>
                </Link>
            </div>
        </nav>
        
    );
}
