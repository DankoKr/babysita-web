import styles from './Button.module.css';

const Button = ({text, onClick, type}) => {
    return (
        <button className={styles.submitBtn} onClick={onClick} type={type}>
            {text}
        </button>
    );
}
 
export default Button;