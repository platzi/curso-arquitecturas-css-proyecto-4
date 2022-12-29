import styles from '../styles/Description.module.scss';

export const Description = ({content})=> {

    return(
        <div className={styles.description}>
            <p>
                {content}
            </p>
        </div>
    )
}