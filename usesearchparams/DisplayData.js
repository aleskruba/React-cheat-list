import React, { useState, useEffect } from 'react';
import FetchData from '../utils/fetchData';

function DisplayData({ id,name,age}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await FetchData(id,name,age);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [id,name,age]);

  return (
    <div>
      {data ? (
        <pre className='mt-5'>{JSON.stringify(data, undefined, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DisplayData;
