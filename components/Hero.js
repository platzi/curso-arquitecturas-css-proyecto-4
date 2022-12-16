import Image from 'next/image';
import styles from '../styles/Hero.module.scss'

export const Hero = ({ children, imageUrl }) => {
  
    return (
        <header className={ styles.hero }>
            <Image
                src={imageUrl}
                alt="In front of the beach"
                width={1300}
                height={800}
                className={ styles.img}
            />
            {children}
        </header>
    )
};
