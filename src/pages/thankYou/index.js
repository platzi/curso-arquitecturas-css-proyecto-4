import Link from 'next/link'
import styles from '../../styles/ThankYouPage.module.scss'

export default function ThankYouPage() {
    return (
        <div className={styles.thankYouPage}>
            <p>Thanks you for your purchase</p>
            <Link href='/'>Go home</Link>
        </div>
        
    )
}