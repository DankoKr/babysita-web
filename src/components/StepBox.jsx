import styles from './StepBox.module.css'

const StepBox = ({ title, description }) => {
    return (  
        <div className={styles.stepbox}>
            <div className={styles['container']}>
               <h3>{title}</h3>
               <p>{description}</p>
            </div>
        </div>

    );
}
 
export default StepBox;