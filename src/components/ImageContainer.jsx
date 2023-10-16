import styles from './ImageContainer.module.css';

const ImageContainer = ({ src }) => {
  return (
    <div className={styles.imageContainer}>
      <img src={src} alt=""/>
    </div>
  );
};

export default ImageContainer;
