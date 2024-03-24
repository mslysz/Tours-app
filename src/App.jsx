import { useState, useEffect } from 'react';
import { Loading } from './Loading';
import { Tours } from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isloading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const toursData = await response.json();
      setTours(toursData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isloading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      {tours.length > 0 ? (
        <Tours tours={tours} removeTour={removeTour} />
      ) : (
        <button onClick={fetchData} className='btn'>
          Render again
        </button>
      )}
    </main>
  );
};

export default App;
