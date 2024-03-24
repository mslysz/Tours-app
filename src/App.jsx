import { useState, useEffect } from 'react';
import { Loading } from './Loading';
import { Tours } from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isloading, setIsLoading] = useState(true);
  const [tours, setTour] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const toursData = await response.json();
      setTour(toursData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <h1>our tours</h1>
      {isloading ? (
        <Loading />
      ) : (
        <>
          <Tours tours={tours} />
          <button onClick={fetchData} className='btn'>
            Render again
          </button>
        </>
      )}
    </main>
  );
};
export default App;
