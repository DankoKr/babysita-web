import { useContext, useEffect } from "react";
import useGetRequest from "../services/useGetRequest";
import styles from "./PostersPage.module.css";
import TokenManager from "../auth/TokenManager";
import PostersWrapper from "../components/PostersWrapper";
import AuthContext from "../auth/AuthContext";

const PosterPage = () => {
  const { user } = useContext(AuthContext);
  const [posterData, fetchPosters] = useGetRequest(
    "/posters/noBabysitter",
    TokenManager.getAccessToken()
  );

  useEffect(() => {
    fetchPosters();
  }, []);

  if (posterData.size === 0)
    return <p className={styles.loadingMessage}>No data...</p>;

  return (
    <PostersWrapper
      posterData={posterData}
      isBabysitter={user.role === "babysitter"}
    />
  );
};

export default PosterPage;
