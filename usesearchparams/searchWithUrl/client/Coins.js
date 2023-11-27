import React from 'react'
import '../App.css';

function Coins({coins}) {
  return (<>
    <ul className='grid-container'>
    {coins?.map(coin=>(
        <li key={coin.uuid} className='flex flex-col'> 
   
            <h3>{coin.name}</h3>
            <h3>{coin.symbol}</h3>
            <h3>{coin.price}</h3>
        </li>
    ))}
</ul>
  {coins.length<1 && <div>no data</div>}
</>
  )
}

export default Coins