import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://localhost:8000/api/tasks?project_id=1');
        const response = await axios.post('http://localhost/cors/');
        setData(response.data);
        setError(null); // Clear any previous error
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError(error.response.data); // Set the 404 response data
        } else {
          setError(error);
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <div>
        {error ? (
          <pre>Error 404: data not found</pre>
        ) : data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;
