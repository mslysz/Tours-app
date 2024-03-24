export const Tour = (tour) => {
  const { image, info, name, price } = tour;
  return (
    <li className='single-tour'>
      <img src={image} alt={name} />
      <span className='tour-price'>{price}</span>

      <div className='tour-info'>
        <h5>Best of {name}</h5>
        <p>{info}</p>
        <button className='info-btn' type='button'>
          read more
        </button>
      </div>
      <button className='delete-btn' type='button'>
        not intrested
      </button>
    </li>
  );
};
