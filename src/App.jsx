import { useState, useEffect } from 'react';
import { Loading } from './Loading';
import { Tours } from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(tours);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const tours = await response.json();
        setTour(tours);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>our tours</h1>
      {loading ? <Loading /> : <Tours tours={tours} />}
    </main>
  );
};
export default App;
