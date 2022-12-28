import * as React from 'react';
import './style.css';

export default function App() {
  const cart = [
    { title: 'Samsung S7', price: 1000, amount: 2 },

    { title: 'Samsung S5', price: 2000, amount: 3 },

    { title: 'Samsung S3', price: 3000, amount: 5 },
  ];

  let  {totalItems,cardTotal}  = cart.reduce((total,cartItem)=>{
    const {amount,price} = cartItem
    //count items  
    total.totalItems += amount
    //count sum
    total.cardTotal += amount*price

        return total
  },
 {
  totalItems:0,
  cardTotal:0
 } )

  console.log(totalItems)
  console.log(cardTotal)

  return <div></div>;
