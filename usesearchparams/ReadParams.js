import React, { useEffect, useState } from 'react';
import { useLocation,useSearchParams } from 'react-router-dom';
import DisplayData from './DisplayData';

function ReadParams() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const idParam = searchParams.get('id');
    const nameParam= searchParams.get('name');
    const nameAge = searchParams.get('age');
    if (idParam) {
      setId(idParam);
    }
    if (nameParam) {
        setName(nameParam);
      }
    if (nameAge) {
        setAge(nameAge);
      }
  }, [location.search]);

const handleChange = () => {
    const updatedId = parseInt(id || '0') + 1;
    setId(updatedId.toString());

    const currentSearchParams = new URLSearchParams(location.search);
    currentSearchParams.set('id', updatedId.toString());
    setSearchParams(currentSearchParams);
}

searchParams.forEach((value,key)=>{
    console.log(`${key} - ${value}`)
})
    return (
    <div>
      <h1>ID from URL: {id}</h1>
    <button onClick={handleChange}>Add 1</button>
      <DisplayData id={id} name={name} age={age}/>
    </div>
  );
}

export default ReadParams;
