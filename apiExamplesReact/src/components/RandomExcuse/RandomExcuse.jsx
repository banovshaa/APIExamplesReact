import React from 'react'
import './RandomExcuse.css'
import Axios from "axios"
import { useState } from 'react'

const ApiTask = () => {
    const[text,setText]=useState(null)
    const findEx=(e)=>{
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${e.target.value}/`).then(res=>{
            setText(res.data[0].excuse);
        })
    }
  return (
    <div className='RandomExcuse'>   
        <h1>Generate An Excuse</h1>
        <div className='allBtn'>
            <button value='party' onClick={findEx}>Party</button>
            <button value='family' onClick={findEx}>Family</button>
            <button value='office' onClick={findEx}>Office</button>
        </div>
        <p>{text}</p>
    </div>
  )
}

export default ApiTask