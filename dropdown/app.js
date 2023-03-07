import * as React from 'react';
import Dropdown from './Dropdown';
import './style.css';

export default function App() {

    const items = [
      {id:1,
        value:'ales'},
      {id:2,
        value:'adam'},
      {id:3,
         value:'pepa'},
                  
    ]


  return (
  <div>
    <Dropdown title="select Movie" items={items} multiSelect/>
  </div>
  
  );
}
