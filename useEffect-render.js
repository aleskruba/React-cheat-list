import * as React from 'react';
import './style.css';
import {useState,useEffect} from 'react';

export default function App() {

  const [count,setCount] = useState(0)
  const [count1,setCount1] = useState(0)

  const handler = () => {
    setCount(count+1)
    console.log('handler ', count)
  }
  useEffect(()=>{
    console.log('useEffect ', count)
    },
  [count])

const tick = () =>{
  setCount1(count1 + 1)
}

useEffect( ()=>{
  const interval = setInterval(tick,1000)
  return () => {
    clearInterval(interval)
  }
},[count1])


  return (
    <div>
      
      <button onClick={handler}> click it</button>
       <p> you clicked   {count}  times    </p>
      <br/>
      <p>automatic counter {count1} </p>
    </div>
  );
}
