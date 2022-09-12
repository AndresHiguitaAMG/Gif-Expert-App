import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

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