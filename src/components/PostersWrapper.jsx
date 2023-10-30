import Poster from './Poster';
import styles from './PostersWrapper.module.css';

const PostersWrapper = ({posterData, userId}) => {
    return (
        <div className={styles.posterContainer}>
          {[...posterData.values()].map((poster) => (
            <div className={styles.posterData} key={poster.id}> 
              <Poster poster={poster}/>
              <div>
                {userId && <button>My Button</button>}
              </div>
            </div>
          ))}
        </div>
    );
}
 
export default PostersWrapper;