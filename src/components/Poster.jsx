import useGetByIdRequest from "../services/useGetByIdRequest";
import styles from './Poster.module.css';

const Poster = ({id}) => {
    const poster = useGetByIdRequest(Number(id)); 

    return (
        <div className={styles.posterContainer}>
            {poster ? (
                <div className={styles.posterData}>
                    <h2>Poster Information</h2>
                    <p><strong>Title:</strong> {poster.title}</p>
                    <img src={poster.imageUrl} alt={poster.title || "Poster image"} />
                    <p><strong>Description:</strong> {poster.description}</p>
                    <p><strong>Date:</strong> {poster.eventDate}</p>
                </div>
            ) : (
                <p>No poster data available.</p>
            )}
        </div>
    );
}
 
export default Poster;

