import styles from '../styles/Rating.module.scss';

export const Rating = ({caption, mark})=> {
    const barStyle = {
        height: '100%',
        backgroundColor: 'black',
        width: `${mark / 5 * 100}%`,
    }
    return (
        <div className={styles.rating}>
            <div className={styles.caption}>
                <p>{caption}</p>
            </div>
            <div className={styles.mark}>
                <div  className={styles.outer} >
                    <div style={barStyle}>

                    </div>
                </div>
                <span>{mark}</span>
            </div>
        </div>
    )
}