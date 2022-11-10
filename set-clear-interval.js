import * as React from 'react';
import './style.css';


export default function App() {

  const [number,setNumber] = React.useState(0);

  React.useEffect(()=>{
      console.log('effect')

      const interval = setInterval(()=>{
          setNumber(prev=>prev+1)
      },1000)

      return ()=>{
        clearInterval(interval)
      }

  },[])



  return (
    <div>
      {number} fff
    </div>
  );
}
