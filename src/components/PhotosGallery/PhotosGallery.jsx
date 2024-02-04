import { Grid, PhotosGalleryItem } from 'components';

export const PhotosGallery = ({ images }) => {
  return (
    <Grid>
      {images.map(({ id, avg_color, alt, src }) => (
        <PhotosGalleryItem key={id} color={avg_color} alt={alt} src={src} />
      ))}
    </Grid>
  );
};
