import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.scss'

export const Navbar = () => {

    return (

        <nav className={styles.navbar}>

            <Link href="/">
                <Image 
                    src='/images/logo.svg'
                    alt="Beach Resort"
                    width={300}
                    height={100} 
                    className={styles.logo}
                    priority={true}
                />
            </Link>
                    
        </nav>
        
    );
}
