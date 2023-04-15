import styles from '../styles/Description.module.scss';

export const Description = ({content})=> {

    return(
        <div className={styles.description}>
            <h2>Overview</h2>
            <p>
                {content}
            </p>
        </div>
    )
}