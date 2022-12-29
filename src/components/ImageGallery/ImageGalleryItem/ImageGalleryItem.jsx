import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ url, alt, getUrl, largeImageURL }) => {
  return (
    <li className={styles.imageGalleryItem}>
      <img
        src={url}
        alt={alt}
        className={styles.imageGalleryItemImage}
        onClick={() => {
          getUrl(largeImageURL);
        }}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  getUrl: PropTypes.func,
};
