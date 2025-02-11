import styles from "./Poster.module.css";
import PosterActions from "./PosterActions";

const Poster = ({ poster, isEditable, isBabysitter }) => {
  return (
    <div className={styles.posterContainer}>
      {poster ? (
        <div className={styles.posterData}>
          <h2>Poster Information</h2>
          <p>
            <strong>Title:</strong> {poster.title}
          </p>
          <img src={poster.imageUrl} alt={"Poster image"} />
          <p>
            <strong>Description:</strong> {poster.description}
          </p>
          <p>
            <strong>Date:</strong> {poster.eventDate}
          </p>
          <PosterActions
            poster={poster}
            isEditable={isEditable}
            isBabysitter={isBabysitter}
          />
        </div>
      ) : (
        <p>No poster data available.</p>
      )}
    </div>
  );
};

export default Poster;
