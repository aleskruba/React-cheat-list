import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './myteachers.module.css';
import MyTeacherComponent from '../../components/MyTeachers/MyTeacherComponent';

function MyTeachers() {
  const [arr, setArray] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('./array.json');
        const teachers = response.data.newTeachers;
        setTotalElements(teachers.length);
        setArray((prevArray) => [...prevArray, ...teachers.slice(startIndex, startIndex + 15)]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [startIndex]);

  console.log(totalElements);

  useEffect(() => {
    if (arr.length > 0 && startIndex >= totalElements - 15) {
      setLastPage(true);
    } else {
      setLastPage(false);
    }
  }, [arr, startIndex, totalElements]);

  const handleLoadMore = () => {
    setStartIndex((prevIndex) => prevIndex + 15);
  };

  const goUpFunction = () => {
    setStartIndex(0);
    setArray([]);
    setLastPage(false);
  };

  return (
    <div className={styles.mainDiv}>
      {arr.map((element, index) => {
        return <MyTeacherComponent name={element.name} key={index} />;
      })}
      {lastPage ? (
        <button onClick={goUpFunction}>Go up</button>
      ) : (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}

export default MyTeachers;
