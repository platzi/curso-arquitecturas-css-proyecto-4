import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.scss'


export const Header = () => {

    const { data: session } = useSession()

    return (

        <header className={styles.header}>
            <Link
                href="/"
                className={styles.logoContainer}
            >
                <Image 
                    className={styles.logo}
                    src='/images/imagen-logo.png'
                    alt="Beautiful Places"
                    width={1000}
                    height={1000} 
                    priority={true}
                />
                <h1>Beautiful Places</h1>
            </Link>
            <div className={styles.sessionInfo}>
                { 
                    session 
                    ? (
                        <>
                            <p>Hi, {session.user.firstName}</p>
                            <a href="" onClick={()=>signOut()}>Sign out</a>
                        </>
                    ) : (
                            
                            <Link href="/login">Sign in</Link>
                    ) 
                }
                
                
            </div>
        </header>    
    );
}