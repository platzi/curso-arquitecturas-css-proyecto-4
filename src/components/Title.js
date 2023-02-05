import styles from '../styles/Title.module.scss'

export const Title = ({ text }) => {
    return (
        <div className={styles.title}>
            <h3>{text}</h3>
            <div className={styles.underline}></div>
        </div>
    );
};