import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './findteachers.module.css';

function FindTeachers() {
  const [teachersArray, setTeachersArray] = useState([]);
  const [displayedTeachers, setDisplayedTeachers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(20);
  const [goUp, setGoUp] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://jsonplaceholder.typicode.com/todos';

      try {
        const response = await axios.get(url, { withCredentials: true });
        const teacherdata = response.data;
        setTeachersArray(teacherdata);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const lastElement = useRef();

  const GoUpFunction = () => {
    setDisplayedTeachers([])
    setPage(20);
    setGoUp(!goUp)
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  


  const loadMoreData = () => {
    if (
      lastElement.current &&
      lastElement.current.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      // When you reach the last element, load more data
      setPage((prevPage) => prevPage + 2);
    }
  };

  useEffect(() => {
    if (!isLoading && displayedTeachers.length <= teachersArray.length) {
      const handleScroll = () => {
        loadMoreData();
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        // Remove the event listener when the component unmounts
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isLoading,goUp]);



  useEffect(() => {
    setDisplayedTeachers(teachersArray.slice(0, page));
  }, [teachersArray, page,goUp]);

  return (
    <div className={styles.main}>
      {isLoading ? (
        <p>Loading ....</p>
      ) : (
        <>
          {displayedTeachers.map((element, index) => (
            <div key={element.id}>
                <div className={index % 15 === 0 ? styles.box15 : styles.box} 
                    ref={index % 15 === 0 ? 
                        lastElement 
                            :
                         null}>
                <p>{element.title}</p>
              </div>
              <div>
                {index >= teachersArray.length - 1 ? (
                  <button onClick={() => GoUpFunction()}>Go Up</button>
                ) : null}
              </div>
              <div className={styles.counter}>
                    remains {teachersArray.length - displayedTeachers.length} elements 
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FindTeachers;
