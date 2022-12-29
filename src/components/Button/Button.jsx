import styles from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      Load More
    </button>
  );
};
