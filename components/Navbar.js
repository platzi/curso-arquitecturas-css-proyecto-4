import Link from 'next/link'
import Image from 'next/image'
import logo from "../public/images/logo.svg"
import styles from '../styles/Navbar.module.scss'

export const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            
                <div className={styles.navHeader}>
                    <Link href="/">
                        <Image src={logo} alt="Beach Resort" />
                    </Link>
                    
                    <ul className={styles.navLinks} >
                        <li><Link href='/'>Home</Link></li>

                        <li><Link href='/rooms'>Rooms</Link></li>

                    </ul>
                </div>
            
        </nav>
        
    );
}
