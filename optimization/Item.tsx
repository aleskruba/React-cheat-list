import * as React from 'react';

const Item = React.memo( ({id,value,onChange}) => {

return (
  <form>
    <h5>RE-RENDER {(Math.random()*100).toFixed()}  </h5>
    <label htmlFor='text'>Item</label>
    <input type="text" 
           name='text' 
           onChange={e=>onChange(id,e.target.value)}
           value={value}
           />
  </form>
)

})


export default Item


// you have to use memo
