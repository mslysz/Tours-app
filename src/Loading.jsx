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
    return <h2>Loading...</h2>;
  } else {
    return null;
  }
};
