import { NavLink, useLocation } from "react-router-dom";
import styles from './NotFoundPage.module.css';

const NotFoundPage = (props) => {
    const location = useLocation();
    const errorMessage = location.state?.errorMessage || props.error;

    return (
        <div className={styles.notFound}>
            {
                errorMessage 
                ? (
                    <>
                        <h1>The Current Error Accured:</h1> 
                        <p>{errorMessage}</p>
                    </>
                ) 
                : (
                    <>
                        <h1>404 Not Found</h1> 
                        <p>The page you're looking for doesn't exist.</p>
                    </>
                )
            }
            <NavLink to="/">Back to Home</NavLink>
        </div>
    );
}
 
export default NotFoundPage;
