import styles from "./Poster.module.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Poster = ({ poster, isEditable, isBabysitter }) => {
  const navigate = useNavigate();

  const handleEditClick = (posterId) => {
    navigate(`/edit-poster/${posterId}`);
  };

  const handleApplyClick = (posterId) => {
    console.log("I apply for " + posterId);
  };

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
          {isEditable && (
            <Button text="Edit" onClick={() => handleEditClick(poster.id)} />
          )}
          {isBabysitter && (
            <Button text="Apply" onClick={() => handleApplyClick(poster.id)} />
          )}
        </div>
      ) : (
        <p>No poster data available.</p>
      )}
    </div>
  );
};

export default Poster;
