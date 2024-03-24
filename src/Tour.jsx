import { useState } from 'react';
export const Tour = ({ tour, removeTour }) => {
  const { id, image, info, name, price } = tour;
  const [showFullText, setShowFullText] = useState(false);

  const handleRemoveTour = () => {
    removeTour(id);
  };
  const shortText = info.split('').slice(0, 250).join('') + '...';
  // Conditionally display full text or short text
  const displayText = showFullText ? info : shortText;

  return (
    <li className='single-tour'>
      <img className='img' src={image} alt={name} />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{displayText}</p>
        {!showFullText && (
          <button
            className='info-btn'
            type='button'
            onClick={() => {
              setShowFullText(true);
            }}
          >
            read more
          </button>
        )}
      </div>
      <button className='delete-btn' type='button' onClick={handleRemoveTour}>
        not interested
      </button>
    </li>
  );
};
