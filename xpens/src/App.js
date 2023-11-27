import React, { useState } from 'react'
import Details  from './login/Details';
import './App.css'

const App = () => {
  const [showComponenet,setShow]=useState(true);
  const handle = () => {
    setShow(false);
  
  }
  return (
    <body>
    { showComponenet ? 
  <button className='add' onClick={handle}>+</button>
  :<Details/>}
  </body>
  )
}



export default App