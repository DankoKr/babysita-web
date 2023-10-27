import { useField } from "formik";
import styles from './CustomInput.module.css';

const CustomSelect = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
        <label className={styles.labelName}>{label}</label>
        <select {...field}{...props}
        className={meta.touched && meta.error ? styles.inputError:""}
        />
        {meta.touched && meta.error && <div className={styles.errorMessage}>{meta.error}</div>}
        </>

    );
}
 
export default CustomSelect;