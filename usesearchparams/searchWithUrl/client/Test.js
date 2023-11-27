
import { useEffect,useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';


function Test() {
    const location = useLocation();
    const params = useParams()
 
    const [idParams,setIdParams] = useState()


    useEffect(()=>{ 
    const paramsKeyword = new URLSearchParams(location.search);
    const keyword = paramsKeyword.get('search');
    setIdParams(keyword)
    },[location.search])

    return (
    <div>
        <h1>{params.id?.toString()}</h1>
        <h1>{idParams?.toString()}</h1>
    </div>
  )
}

export default Test