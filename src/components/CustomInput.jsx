import { useField } from "formik";
import styles from './CustomInput.module.css';

//Take and object with needed fields -> props
const CustomInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
        <label>{label}</label>
        {/* Display the provided content (props)*/}
        <input {...field}{...props}
        className={meta.touched && meta.error ? styles.inputError:""}
        />
        {meta.touched && meta.error && <div className={styles.errorMessage}>{meta.error}</div>}
        </>

    );
}
 
export default CustomInput;