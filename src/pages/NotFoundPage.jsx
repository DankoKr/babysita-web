import { NavLink } from "react-router-dom";
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <div className={styles.notFound}>
            <h1>404 Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>     
            <NavLink to="/">Back to Home</NavLink>
        </div>

    );
}
 
export default NotFoundPage;