import { useState, useEffect } from 'react';

export const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return <div className='loading'></div>;
  } else {
    return [];
  }
};
