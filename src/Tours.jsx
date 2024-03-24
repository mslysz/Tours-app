import { useState } from 'react';
import { Tour } from './Tour';

export const Tours = ({ tours }) => {
  const [toursList, setToursList] = useState(tours);
  const removeTour = (id) => {
    setToursList(toursList.filter((tour) => tour.id !== id));
  };
  return (
    <ul className='tours'>
      {toursList.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
      })}
    </ul>
  );
};
