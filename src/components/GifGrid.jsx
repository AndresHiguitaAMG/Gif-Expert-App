import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import GifItem from './GifItem';

const GifGrid = ({ category }) => {
  const [ images, setImages ] = useState([]);

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
        <h3>{category}</h3>
        <div className='card-grid'>
          {
            images.map((i) => (
              <GifItem 
              key={i.id}
              {...i}
              />
            ))
          }
        </div>
    </>
  );
};

export default GifGrid;