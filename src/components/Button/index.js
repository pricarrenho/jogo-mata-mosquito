import styles from "./styles.module.css";

export const Button = ({ children, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
};
