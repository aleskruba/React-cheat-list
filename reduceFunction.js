import * as React from 'react';
import './style.css';
import records from './public/data.json'

export default function App() {

  const phones = [
    {id:1,
    name:'iphone 9',
    price:1000,
    amount:10,
    batch:333  
  },
  {id:2,
    name:'iphone 9',
    price:1000,
    amount:5,
    batch:222  
  },
  {id:3,
    name:'Samsung S5',
    price:500,
    amount:100,
    batch:123456  
  },
  {id:4,
    name:'Huawei 5',
    price:200,
    amount:30,
    batch:85432
  },
  ]

const result = phones.reduce((total,object)=>{
  
  total.totalAmount += object.amount
  total.totalPrice += object.price * object.amount

return total
},{
  totalAmount : 0,
  totalPrice : 0
})

// const fetchRecord = async () => {
//      fetch(url)
//    .then(response => {return response.json() })
//    .then(data => console.log(data) )
//   }


const newData = records.phones.reduce((total,objects)=>{
  const {name} = objects

  if (name) {
  if(total[name]) {
    total[name] = total[name] + 1
  }
  else { 
    total[name] = 1
  }
}

return total
},{})

console.log(newData)





  return (
  <div>
   
  
  </div>
  
  );
}
