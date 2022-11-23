import Link from 'next/link'
import Image from 'next/image'
import { FaAlignRight } from "react-icons/fa"
import logo from "../public/images/logo.svg"
import { useState } from "react"
import styles from '../styles/Navbar.module.css'

export const Navbar = () => {

    // TODO: Pending to investigate what is this for.
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(previous => !previous);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <Link href="/">
                        <Image src={logo} alt="Beach Resort" />
                    </Link>
                    <button
                        type="button"
                        className={styles.navBtn}
                        onClick={handleToggle}
                    >
                        <FaAlignRight className={styles.navIcon} />
                    </button>
                
                    <ul className={styles.navLinks} >
                        <li><Link href='/'>Home</Link></li>

                        <li><Link href='/rooms'>Rooms</Link></li>

                    </ul>
                </div>
            </div>
        </nav>
        
    );
}
