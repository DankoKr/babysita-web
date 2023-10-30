import { useEffect } from "react";
import useGetRequest from "../services/useGetRequest";
import styles from './PostersPage.module.css';
import TokenManager from "../auth/TokenManager";
import PostersWrapper from "../components/PostersWrapper";

const PosterPage = () => {
  const [posterData, fetchPosters] = useGetRequest("/posters", TokenManager.getAccessToken());

  useEffect(() => {
    fetchPosters(); 
  }, []);

  if (posterData.size === 0) return <p className={styles.loadingMessage}>No data...</p>;

  return (
    <PostersWrapper posterData={posterData}/>
  );
};

export default PosterPage;


