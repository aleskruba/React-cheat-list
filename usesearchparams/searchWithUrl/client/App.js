import './App.css';
import { useState} from 'react'
import Coins from './components/Coins';
import SearchCoins from './components/SearchCoins';
import Test from './components/Test';

function App() {

  const [coins,setCoins] = useState([])

/*   useEffect(() => {
  const fetchData = async () => {
    try {


      const response = await axios('http://localhost:3500'); // Replace with your actual API endpoint
      const coins = await response.data.coins.data.coins // Type assertion
      console.log(coins); // Set the fetched data to the 'coins' state
      setCoins(coins)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
},[]) */

  return (
    <div className="App">
        <h1 className='font-bold text-6xl mt-14'>Crypto Coins</h1>
        <SearchCoins setCoins={setCoins}/>
        
        <Coins coins={coins} />

        <Test/>

    </div>

  );
}

export default App;
