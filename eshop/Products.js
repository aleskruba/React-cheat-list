import React,{useState,useEffect} from 'react'

export default function Products({products}) {


const [product,setProduct] = useState({
        "id":'',   
        "name":'',
        "price":null,
        "amount":null
    })     

const [productList,setProductList] = useState(products)

const [basketItem,setBasketItem] = useState({
    "id":'',
    "name":'',
    "price":null,
    "amount":1
})

const [basket,setBasket] = useState([])

let {totalAmount,totalPrice} = productList.reduce((total,items)=>{
    const {price,amount} = items
    total.totalAmount += amount
    
    return total
},{
  totalPrice : 0,
  totalAmount : 0
    
})

useEffect(()=>{

},[basket,product])
console.log(totalAmount)

const [basketAmount,setBasketAmount] = useState(1)

const handleBasket = (id) => {

productList.map(product=>{
  
    const productInBasket = basket.find(el => el?.id === product.id);
    if(product.id ===id ){
 
    if (!productInBasket)
             { 
              setBasket([...basket,{
                id:product.id, 
                name:product.name,
                price:product.price, 
                amount: 1}])
             }
    else {
     const basketItems = basket.map(i=>{
        if (i.id===product.id){
                 return {...i,amount:i.amount+1}
        }
        return i
          
      })
      setBasket(basketItems)  
    }
       
      }
    })


  }


  const handlePayment = () => {
    const newStock = productList.map(product => {
      const productInBasket = basket.find(el => el.id === product.id);
      
      if (!productInBasket) return product;
      
      return {
        ...product,
        amount: product.amount - productInBasket.amount,
      }
    })
setProductList(newStock)
setBasket([])
  }  
      
    console.log(productList)
    console.log(basket)


let {totalBasketAmount,totalBasketPrice} = basket.reduce((total,items)=>{
      const {price,amount} = items
      total.totalBasketAmount += amount
      
      return total
  },{
    totalBasketPrice: 0,
    totalBasketAmount: 0
      
  })

    
  return (

    <div className='products'>
        <div className='left'>
          <h2>total items in basket : {totalBasketAmount}</h2> 
            {productList.map(i=>(
                <h5 key={i.id}>{i.name} - price: {i.price} | amount: {i.amount} 
                <button onClick={(id)=>handleBasket(i.id)}>basket</button></h5>
            ))}
      </div>
            <div className="right">
       {basket.length ? <button onClick={handlePayment}>pay here</button>: null}      
          </div>
    </div> 
  )
}
