import Poster from "../components/Poster";
import useGetRequest from "../services/useGetRequest";
import styles from './PostersPage.module.css';

const PosterPage = () => {
  const posterData = useGetRequest();

  if (posterData.size === 0) return <p className={styles.loadingMessage}>Loading...</p>;

  return (
    <div className={styles.posterContainer}>
      {[...posterData.values()].map((poster) => (
        <div className={styles.posterData} key={poster.id || poster}> 
          <Poster id={poster.id || poster}/>
        </div>
      ))}
    </div>
  );
};

export default PosterPage;


