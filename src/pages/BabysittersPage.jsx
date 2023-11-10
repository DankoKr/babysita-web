import { useEffect } from "react";
import Babysitter from "../components/Babysitter";
import useGetRequest from "../services/useGetRequest";
import TokenManager from "../auth/TokenManager";
import styles from './BabysitterPage.module.css';

const BabysittersPage = () => {
  const [babysitterData, fetchBabysitters] = useGetRequest("/babysitters", TokenManager.getAccessToken());

  useEffect(() => {
    fetchBabysitters(); 
  }, []);

  if (babysitterData.size === 0) return <p className={styles.loadingMessage}>Loading...</p>;

  return (
    <div className={styles.babysitterContainer}>
      {[...babysitterData.values()].map((babysitter) => (
        <div className={styles.babysitterData} key={babysitter.id}> 
          <Babysitter babysitter={babysitter}/>
        </div>
      ))}
    </div>
  );
};

export default BabysittersPage;
