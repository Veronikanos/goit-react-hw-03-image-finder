import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ result }) => {
  console.log(result);
  return (
    <ul className={styles.imageGallery}>
      {result.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} url={webformatURL} alt={tags} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};
