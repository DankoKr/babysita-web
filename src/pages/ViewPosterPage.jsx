import { useParams, useNavigate } from 'react-router-dom';
import Poster from '../components/Poster';
import styles from './ViewPosterPage.module.css';

const ViewPosterPage = () => {
    const { id } = useParams();
    const navigate  = useNavigate();
  
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className={styles.container}>
            <div>
                <Poster id={id}/>
            </div>

            <button className={styles.button} onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ViewPosterPage;
