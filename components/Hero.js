import styles from '../styles/Hero.module.css'

export const Hero = ({ children, hero }) => {
  
    return (
        <header className={styles.defaultHero}>
            {children}
        </header>
    )
};

/*
Hero.defaultProps = {
  hero: "defaultHero"
};
*/