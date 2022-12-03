import styles from '../styles/Hero.module.css'

export const Hero = ({ children, hero }) => {
  
    return (
        <header className={ hero ? styles.hero : styles.defaultHero }>
            {children}
        </header>
    )
};
