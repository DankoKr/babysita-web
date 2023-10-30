import { useContext, useEffect } from "react";
import useGetUserPostersRequest from "../services/useGetUserPostersRequest";
import styles from './PostersPage.module.css';
import TokenManager from "../auth/TokenManager";
import PostersWrapper from "../components/PostersWrapper";
import AuthContext from "../auth/AuthContext";

const MyPostersPage = () => {
  const { user } = useContext(AuthContext);
  const [posterData, fetchPosters] = useGetUserPostersRequest("/user", TokenManager.getAccessToken());

  useEffect(() => {
    fetchPosters(user.userId); 
  }, []);

  if (posterData.length === 0) return <p className={styles.loadingMessage}>No data...</p>;

  return (
    <PostersWrapper posterData={posterData} userId={user.id}/>
  );
};

export default MyPostersPage;