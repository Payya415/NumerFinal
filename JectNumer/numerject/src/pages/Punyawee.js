import React, { useState } from 'react'
import { BisectionMethod } from '../modules/Bisection';
import Bisection from './Bisection';

const Punyawee = () => {
    const [XL,setXl] = useState(" ");
    const [XR,setXr] = useState(" ");
    const [Result,setResult] = useState("");
    const XLinput = (event) => {
        setXl(event.target.value)
        console.log(event.target.value)
    }
    const XRinput = (event) => {
        console.log(event)
        setXr(event.target.value)
        console.log(event.target.value)
    }
    const submitHandler = (event) =>{
        console.log(event)
        event.preventDefault()
        console.log(XL,XR)
        let XlNumber = parseFloat(XL)
        let XrNumber = parseFloat(XR)
        setResult(BisectionMethod(XlNumber,XrNumber))
      }
  return (
    <div>Punyawee
        <form onSubmit={submitHandler}>
            <label>โจทย์</label>
            <input type='' />
            <label>Xl</label>
            <input type='text' value={XL} onChange={XLinput}/>
            <label>Xr</label>
            <input type='text' value={XR} onChange={XRinput}/>
            <button type='Submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Punyawee