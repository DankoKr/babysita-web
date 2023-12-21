import styles from './Button.module.css';

const Button = ({ text, onClick, type, dataTestId }) => {
  return (
    <button
      className={styles.submitBtn}
      onClick={onClick}
      type={type}
      data-test-id={dataTestId}
    >
      {text}
    </button>
  );
};

export default Button;
