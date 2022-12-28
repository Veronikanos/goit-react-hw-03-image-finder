import styles from './Modal.module.css';

export const Modal = ({ largeImg }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img src={largeImg} alt="" />
      </div>
    </div>
  );
};
