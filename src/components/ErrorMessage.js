import styles from '../styles/ErrorMessage.module.scss'

export const ErrorMessage = (message) => {
  return (
    <small className={styles.errorMessage}>{message}</small>
  )
}
