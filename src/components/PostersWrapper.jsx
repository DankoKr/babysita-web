import Poster from './Poster';
import styles from './PostersWrapper.module.css';

const PostersWrapper = ({posterData, isEditable}) => {
    return (
        <div className={styles.posterContainer}>
          {[...posterData.values()].map((poster) => (
            <div className={styles.posterData} key={poster.id}> 
              <Poster poster={poster} isEditable={isEditable}/>
            </div>
          ))}
        </div>
    );
}
 
export default PostersWrapper;