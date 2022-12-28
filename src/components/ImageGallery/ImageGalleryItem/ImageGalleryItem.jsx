import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ url, alt, getUrl, largeImageURL }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={url}
        alt={alt}
        className={styles.ImageGalleryItemImage}
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
