import React from 'react'
import { useState } from 'react';
const Input = () => {
    const [desc,setDesc]=useState('');
    const [amount,setAmount]=useState(0);
    const [list,setList]=useState([]);
    const [total,setTotal]=useState(0);
    const handle = () =>{
        let item={
            name:desc,
            value:amount,
        }
        setTotal(parseInt(total)+parseInt(amount));
        setList([...list,item])
        
    }
  return (
    <>
    <div>
    <label>
    Enter payee:
    <input type='text' onChange={(e)=>{setDesc(e.target.value)}}></input></label><br></br>
    <label>
    Enter Amount:
    <input type='text' onChange={(e)=>{setAmount(e.target.value)}}></input></label><br></br>
    <button onClick={handle}>submit</button>
    </div>
    <ol>
    {
        list.map((a,i)=>(
          <li key={i}>{a.name} {a.value}</li>
        ))
    }
    <h1>Total amount: {total}</h1>
    </ol>   
    </>
  )
}

export default Input