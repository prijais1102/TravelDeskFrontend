import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
 
const Fetch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://localhost:44310/api/Travel/AllUsers')
          .then(response => response.json())
          .then(data => setData(data));
      }, []);
  return (
    <div>
 
{data.map(item => (
        <div key={item.userId}>
          <h2>{item.firstName}</h2>
        </div>
      ))}
 
    </div>
  )
}
 
export default Fetch;
 