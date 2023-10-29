import { useEffect } from "react";
import Poster from "../components/Poster";
import useGetRequest from "../services/useGetRequest";
import styles from './PostersPage.module.css';
import TokenManager from "../auth/TokenManager";

const PosterPage = () => {
  const [posterData, fetchPosters] = useGetRequest("/posters", TokenManager.getAccessToken());

  useEffect(() => {
    fetchPosters(); 
  }, []);

  if (posterData.size === 0) return <p className={styles.loadingMessage}>Loading...</p>;

  return (
    <div className={styles.posterContainer}>
      {[...posterData.values()].map((poster) => (
        <div className={styles.posterData} key={poster.id}> 
          <Poster poster={poster}/>
        </div>
      ))}
    </div>
  );
};

export default PosterPage;


