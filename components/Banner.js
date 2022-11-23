import styles from '../styles/Banner.module.css'
export const Banner = ({ children, title, subtitle }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </div>
  );
};
