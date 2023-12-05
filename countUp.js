  const [count, setCount] = useState(0)
  const [stop,setStop] = useState(true)
  const [lastNumber,setLastNumber] = useState(20)
  const [speed,setSpeed] = useState(50)
  const [lastFive,setLastFive]  = useState(5)
  useEffect(() => {
    if (stop) {
      const interval = setInterval(() => {
        setCount(prevCount => {
          const updatedCount = prevCount + 1;
          if (updatedCount >= lastNumber) {
            setStop(false);
            clearInterval(interval); // Stop the interval when count reaches 10
          }
          if (lastNumber - updatedCount <= lastFive) {
            setSpeed(prevSpeed => prevSpeed + 100);
          }
          return updatedCount;
        });
      }, speed); // Use the 'speed' state variable here instead of [speed]
    
      return () => {
        clearInterval(interval); // Clear interval on component unmount or when stop is set to false
      };
    }
  }, [stop, speed, lastNumber, lastFive]); // Add all the dependencies to useEffect
  


   
