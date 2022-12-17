import styles from '../styles/Indicator.module.scss';

export const Indicator = ({caption, rating})=> {
    const barStyle = {
        height: '100%',
        backgroundColor: 'black',
        width: `${rating / 5 * 100}%`,
    }
    return (
        <div className={styles.indicator}>
            <div className={styles.caption}>
                <p>{caption}</p>
            </div>
            <div className={styles.rating}>
                <div  className={styles.outer} >
                    <div style={barStyle}>

                    </div>

                </div>
                <span>4.5</span>
            </div>
        </div>
    )
}