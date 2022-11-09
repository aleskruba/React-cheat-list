import * as React from 'react';
import './style.css';

export default function App() {

const [name,setName] = React.useState('')
const [state, setState]= React.useState({
  name:"",
  selected:false,
  age:20,
  city:""
 })

// const user = React.useMemo(()=>({
//   name:state.name,
//   selected:state.selected
// }),[state.name,state.selected])

React.useEffect(()=>{
  console.log('state has changed')
},[state.name, state.selected])

const handleAdd = () => {
  setState(prev=>({...state,name}))

}

const handleSelect = () => {
  setState(prev=>({...state,selected:true}))
  
}


  return (
    <div>
    <input type="text" onChange={e=>setName(e.target.value)}/>
    <br/>
    <button onClick={handleAdd}>Add name</button>
    <button onClick={handleSelect}>Select</button>
    <br/>
    {`{
      name:${state.name},
      selected:${state.selected.toString()}
    }`}
    </div>
  );
}
