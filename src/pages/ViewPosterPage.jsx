import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Poster from '../components/Poster';
import styles from './ViewPosterPage.module.css';
import useGetPosterByIdRequest from '../services/useGetPosterByIdRequest';
import Button from '../components/Button';
import TokenManager from '../auth/TokenManager';

const ViewPosterPage = () => {
    const { id } = useParams();
    const navigate  = useNavigate();

    const [poster, fetchDataById] = useGetPosterByIdRequest(TokenManager.getAccessToken());

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
            <Button onClick={handleGoBack} text='Go Back'/>
        </div>
    );
};

export default ViewPosterPage;
