import React, { useEffect, useState } from 'react';
import { useLocation,useSearchParams } from 'react-router-dom';
import DisplayData from './DisplayData';
import '../App.css';

function ReadParams() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});
  const [person,setPerson] = useState({
    id:'',
    name:'',
    age:''
  })


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const idParam = searchParams.get('id');
    const nameParam= searchParams.get('name');
    const ageParam = searchParams.get('age');
    if (idParam) {
        setPerson((prevPerson) => ({ ...prevPerson, id: idParam }));
      }
      if (nameParam) {
        setPerson((prevPerson) => ({ ...prevPerson, name: nameParam }));
      }
      if (ageParam) {
        setPerson((prevPerson) => ({ ...prevPerson, age: ageParam }));
      }
  }, [location.search]);

  const handleChange = (e) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      [e.target.name]: e.target.value
    }));
  };

/* searchParams.forEach((value,key)=>{
    console.log(`${key} - ${value}`)
}) */

const handleSubmit = (e) => {
    e.preventDefault()

    const updatedId = parseInt(person.id || '0') + 1;


    setPerson((prevPerson) => ({
        ...prevPerson,
        id: updatedId.toString(),
      }));
    


    const currentSearchParams = new URLSearchParams(location.search);
    currentSearchParams.set('id', updatedId.toString());
    currentSearchParams.set('name', person.name);
    currentSearchParams.set('age', person.age);

    setSearchParams(currentSearchParams);


}

    return (
    <div>
       <div className='readparamspage'>
        <h1>ID from URL: {person.id}</h1>
      
        <form onSubmit={handleSubmit}>
        <button type='submit'>Add 1</button>
            <input placeholder='name' name='name'     value={person.name} onChange={handleChange}/>
            <input placeholder='age' name='age' onChange={handleChange}/>
            <input type='submit' value='submit' />
        </form>
       </div>
      <DisplayData id={person.id} name={person.name}   value={person.age} age={person.age}/>
    </div>
  );
}

export default ReadParams;
