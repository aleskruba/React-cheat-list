import * as React from 'react';
import './style.css';

export default function App() {

  const files = {
    children : [
      {name: "/ node-modules",
       children: [
         {name:'react-dom'},
         {name:'react'},
         {name:'redux'},
       ]
      },
      {name:'app.js'},
      {name:'index.html'}
    ]
  }

type TEntry = {
  name:string;
  children?:TEntry[]
}

function Entry({name,children}:TEntry) {
  return (
    <div>
      {name}
      {children?.map(entry => {
        return (
        <div style={{marginLeft:30}}>
          <Entry {...entry} />
          </div>
        )
      })}
      </div>
    )
}

  return (
  <div>

    

    {files.children.map(entry=>{
      return (
        <p><Entry {...entry}/></p>
      )
    })}
  
  </div>
  
  );
}
