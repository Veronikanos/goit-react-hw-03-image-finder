import styles from './ImageGallery.module.css';
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
