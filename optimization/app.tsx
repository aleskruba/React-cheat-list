import * as React from 'react';
import Item from './Item';
import './style.css';

export default function App() {

  const [itemValues,setItemValues] = React.useState([
    {value:'',id:'1'},
    {value:'',id:'2'},
    {value:'',id:'3'}
])

const changeValue = (id:string,value:string) => {
  setItemValues(prevItems => prevItems.map(item=>{
    if (item.id === id) {
      item.value = value
    }
    return item
  }))
}

  return (
  <div>
  <p>{JSON.stringify(itemValues)}</p>
   <br/>
    {itemValues.map(itemValue=>{
      return (
      <Item
      key={itemValue.id}
      id={itemValue.id}
      value={itemValue.value}
      onChange={changeValue}
      />
      )
    })}
    

  </div>
  
  );
}
