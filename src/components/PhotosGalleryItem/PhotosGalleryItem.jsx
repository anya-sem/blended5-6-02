import { GridItem } from 'components';
import styles from './PhotosGalleryItem.module.css';
import { useState } from 'react';
import { Mymodal } from 'components/Mymodal/Mymodal';

export const PhotosGalleryItem = ({ alt, src, avg_color }) => {
  const [showModal, setShowModal] = useState(false);
  const toogle = () => {
    setShowModal(prevModal => !prevModal);
  };
  return (
    <GridItem>
      <div
        onClick={toogle}
        className={styles.thumb}
        style={{ backgroundColor: avg_color, borderColor: avg_color }}
      >
        <img src={src.large} alt={alt} />
      </div>
      <Mymodal
        alt={alt}
        src={src}
        modalIsOpen={showModal}
        closeModal={toogle}
      />
    </GridItem>
  );
};
