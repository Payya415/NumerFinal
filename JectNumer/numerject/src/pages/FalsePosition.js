import React, { useState } from "react";
import { FalsePositionMethod } from "../modules/FalsePosition";

const FalsePosition = () => {
  const [PT,setPT] = useState("");
  const [Xl, setXl] = useState("");
  const [Xr, setXr] = useState("");
  const [Result, setResult] = useState("");

  const PTinput = (event) =>{
    setPT(event.target.value);
  };
  const Xlinput = (event) => {
    setXl(event.target.value);
  };
  const Xrinput = (event) => {
    setXr(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault(); //ป้องกันการรีเฟช
    console.log(Xl, Xr);
    let XlFloat = parseFloat(Xl);
    let XrFloat = parseFloat(Xr);
    setResult(FalsePositionMethod(PT,XlFloat, XrFloat)); 
    console.log(Result);
    setPT("");
    setXl("");
    setXr("");
  };
 
  return (
    <div>
        <center><h1>False-Position</h1>
        <form onSubmit={submitHandler}>
        <label>โจทย์</label>
        <input type="text" value={PT} onChange={PTinput}/>
        <br></br>
        <br></br>
        <label>XL</label>
        <input type='text' value={Xl} onChange={Xlinput} />
        <label>XR</label>
        <input type='text' value={Xr} onChange={Xrinput} />
        <br></br>
        <br></br>
        <button type='submit' className='btn btn-outline-success'>SUBMIT</button>
        <br></br>
        The value of root :
      </form>
      {Result[0]}
      {Result[1]}
      {Result[2]}</center>
      </div>
  );
};

export default FalsePosition;
