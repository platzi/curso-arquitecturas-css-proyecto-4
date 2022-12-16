import styles from '../styles/Title.module.scss'

export const Title = ({ title }) => {
    return (
        <div className={styles.sectionTitle}>
            <h4>{title}</h4>
        </div>
    );
};