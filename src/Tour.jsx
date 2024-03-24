import { useState } from 'react';
export const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <li className='single-tour'>
      <img className='img' src={image} alt={name} />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {showFullText ? info : `${info.substring(0, 200)}...`}
          <button
            className='info-btn'
            type='button'
            onClick={() => {
              setShowFullText(!showFullText);
            }}
          >
            {showFullText ? 'show less' : 'read more'}
          </button>
        </p>
      </div>
      <button
        className='btn btn-block delete-btn'
        type='button'
        onClick={() => removeTour(id)}
      >
        not interested
      </button>
    </li>
  );
};
