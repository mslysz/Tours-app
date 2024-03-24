import { Tour } from './Tour';

export const Tours = ({ tours }) => {
  return (
    <ul className='tours'>
      {tours.map((tour) => {
        const { id, image, info, name, price } = tour;
        return <Tour key={id} tour={tour} />;
      })}
    </ul>
  );
};
