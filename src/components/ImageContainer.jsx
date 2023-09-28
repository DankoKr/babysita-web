import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageContainer.module.css';

const ImageContainer = ({ src }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const apiEndpoint = 'https://api.chucknorris.io/jokes/random';

    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => setText(data.value))
      .catch(error => console.error('Error fetching the text:', error));
  }, []);

  return (
    <div className={styles.imageContainer}>
      <img src={src} alt=""/>
      <p>{text}</p>
    </div>
  );
};

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ImageContainer;
