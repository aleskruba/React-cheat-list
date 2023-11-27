import React, { useEffect, useState } from 'react'
import { useLocation,useSearchParams } from 'react-router-dom';
import axios from 'axios'

function SearchCoins({setCoins}) {

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});
  
  const [query,setQuery] = useState('')

console.log(searchParams)

    useEffect(()=>{ 
   
      const params = new URLSearchParams(location.search);
      const idParam = params.get('search');


    if (idParam) {
      console.log(idParam)
    const fetchData = async () => {
      try {
  
  
        const response = await axios(`http://localhost:3500/search?query=${idParam}`); 
        const coins = await response.data
        console.log(coins.filteredCoins); 
        setCoins(coins.filteredCoins)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
    setQuery('')

  }

  },[location.search,setCoins])


    const handleChange = (e) => {
        setQuery(e.target.value)
    }

  
    const handleSubmit = (e) => {
        e.preventDefault()
       

        if (!query) {
            alert('you have to enter something')
        }
        else {
            const fetchData = async () => {

                try {
                const currentSearchParams = new URLSearchParams(location.search);
                 currentSearchParams.set('search', query.toString());
                 setSearchParams(currentSearchParams)
                  const response = await axios(`http://localhost:3500/search?query=${query}`); 
                  const coins = await response.data
                  console.log(coins.filteredCoins); 
                  setCoins(coins.filteredCoins)
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
              };
            
              fetchData();
            setQuery('')
        }
     
    }



  return (
    <div>

    <form onSubmit={handleSubmit}> 
        <input placeholder='keyword'
               onChange={handleChange}
               value={query}
               
               />
        <input type='submit' value='submit'/>
    </form>
    </div>
  )
}

export default SearchCoins