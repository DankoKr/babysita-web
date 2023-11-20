import styles from "./Babysitter.module.css";
import Button from "../components/Button";

const Babysitter = ({ babysitter }) => {
  return (
    <div className={styles.babysitterContainer}>
      {babysitter ? (
        <div className={styles.babysitterCard}>
          <div className={styles.babysitterContent}>
            <div className={styles.babysitterImage}>
              <img src={babysitter.profileImage} alt="User" />
            </div>
            <div className={styles.babysitterInfo}>
              <h4 className={styles.babysitterName}>
                {babysitter.firstName} {babysitter.lastName}
              </h4>
              <span>Age: {babysitter.age}</span>
              <span className={styles.rating}>Points: {babysitter.points}</span>
              {/* <Button text={"Chat"} /> */}
            </div>
          </div>
        </div>
      ) : (
        <p>No Babysitter data available.</p>
      )}
    </div>
  );
};

export default Babysitter;
