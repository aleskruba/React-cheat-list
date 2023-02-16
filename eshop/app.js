import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from "./assets/data.json"
import products from "./assets/products.json"
import People from './components/People'
import Products from './components/Products'

function App() {
  const [count,setCount] = useState(4)

  const [update,setUpdate] = useState(false)

  
  const [names,setNames] = useState({
    id:'',
    name:'',
    year:'',
    city:''
  })

  const [listOfNames,setListOfNames] = useState(data)


  const handleChange = (e) =>{ 
    setNames({...names,[e.target.name]:e.target.value})  
}

const handlerSubmitEdit = () => {



const newValue = listOfNames.map(element=>{
    if (element.id == names.id) {
      return {...element, name:names.name,
                          year:names.year,
                          city:names.city}
    }
    return(element)
  })
  setListOfNames(newValue)
};

const handleSubmit = (e) => {
  e.preventDefault()


  const newValues = {
    id:count,
    name:names.name,
    year:names.year,
    city:names.city

  }

    setCount(c => c + 1)

    {update ? 

      handlerSubmitEdit()

   
      :

    setListOfNames([...listOfNames,newValues])
    setUpdate(false)
    setNames({
      name:'',
      year:'',
      city:''
    })  
  
  }

}

const handleDelete = (id) => {
  if (window.confirm("are you sure ?")) {
  const newValue = listOfNames.filter(d => d.id !== id)
    setListOfNames(newValue)
  }
}

const handleEdit = (id) => {

  setUpdate(true)
  listOfNames.map(i => {
    if (i.id === id) {
      setNames({
        id:i.id,
        name:i.name,
        year:i.year,
        city:i.city
      })
    }
  })

}

const handleCancel = () => {
  setUpdate(false)
}



  return (
    <div className="App">
      <div>
        <Products products={products}/>
      </div>

      <div className="inputs">
        
        <form onSubmit={handleSubmit}>
          <input type="text" 
                  name="name"
                  value={names.name}
                  placeholder="Name..."  
                  onChange={handleChange}              
                  />

          <input type="text"
                  name="year"
                  value={names.year}
                  placeholder="year..."  
                  onChange={handleChange}              
                  
                  />
          
          <input type="text"
                  name="city"
                  value={names.city}
                  placeholder="City..."  
                  onChange={handleChange}              
                  
                  />
         
         {!update ? 
         
            <input type="submit" value="save"/>
            :
            <div className='buttons'>
            <input type="submit" value="update"/>
            <input type="button" value="cancel" onClick={handleCancel}/>
            </div>

    }

      </form>
      </div>
        <People listOfNames={listOfNames}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
        />

    </div>
  )
}

export default App
