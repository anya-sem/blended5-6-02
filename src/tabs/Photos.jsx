import { getPhotos } from 'apiService/photos';
import { Form, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { photos, per_page, total_results } = await getPhotos(
          query,
          page,
        );
        if (photos.length === 0) {
          setIsEmpty(true);
          return;
        }

        setImages(prevImages => [...prevImages, ...photos]);
        setIsVisible(page < Math.ceil(total_results / per_page));
        
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const onHandleSubmit = value => {
    setQuery(value);
  };
  return (
    <>
      <Form onSubmit={onHandleSubmit} />
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};
