import * as React from 'react';

export default function Item({id,value,onChange}) {

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

}
