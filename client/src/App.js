import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/data'); // Replace with your actual API endpoint
      setServerData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {serverData ? (
        <p>Data from server: {serverData.message}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
