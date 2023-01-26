import React from 'react'
import './RandomAge.css'
import Axios from "axios"
import { useState } from 'react'

const RandomAge = () => {
    const[name, setName]=useState(null)
    const[value,setValue]=useState('')
    const changeHandler=(e)=>{
        setValue(e.target.value)
    }
    const searchHandler=()=>{
        Axios.get(`https://api.agify.io/?name=${value}`).then(res=>setName(res.data))
    }
   
  return (
    <div className='randomAge'>
        <h1>Random Age App</h1>
        <div className="top">
            <input onChange={changeHandler} type="text" placeholder='Write Your Name...' />
            <button onClick={searchHandler}>Search</button>
        </div>
        <div className="details">
            <p>Name: {name?.name}</p>
            <p>Age:  {name?.age}</p>
            <p>Count: {name?.count} </p>
        </div>
    </div>
  )
}

export default RandomAge