import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Poster from '../components/Poster';
import styles from './ViewPosterPage.module.css';
import useGetByIdRequest from '../services/useGetByIdRequest';

const ViewPosterPage = () => {
    const { id } = useParams();
    const navigate  = useNavigate();

    const [poster, fetchDataById] = useGetByIdRequest();

    useEffect(() => {
        fetchDataById(id);
    }, [id]);
  
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className={styles.container}>
            <div>
                <Poster poster={poster} />
            </div>
            <button className={styles.button} onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ViewPosterPage;
