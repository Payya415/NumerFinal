import React, { useState, useEffect, useRef } from "react";
import { BisectionMethod } from "../modules/Bisection";
const Bisection = () => {
  const [isLoaded, setIsLoaded] = useState([]);
  const [showGraph, setShowGraph] = useState(false);
  const [Resul, setResult] = useState("");

  const equationInputRef = useRef();
  const xlInputRef = useRef();
  const xrInputRef = useRef();

  const sendRequest = async () => {
    const response = await fetch("http://localhost:5000/api/get-bisection");
    const responseData = await response.json();
    setIsLoaded(responseData);
  };
  useEffect(() => {
    sendRequest();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEquation = equationInputRef.current.value;
    const enteredXl = xlInputRef.current.value;
    const enteredXr = xrInputRef.current.value;

    let xlNumber = parseFloat(enteredXl);
    let xrNumber = parseFloat(enteredXr);

    setResult(BisectionMethod(enteredEquation, xlNumber, xrNumber));
    setShowGraph(true);
  };

  return (
    <div>
      <center>
        <h1>Bisection</h1>
        <form onSubmit={submitHandler}>
          <label>โจทย์</label>
          <select ref={equationInputRef}>
            {isLoaded.map((equ, index) => {
              return (
                <option
                  key={index}
                  value={equ.equation}
                  label={equ.equation}
                ></option>
              );
            })}
          </select>
          <br></br>
          <br></br>
          <label>XL</label>
          <select ref={xlInputRef}>
            {isLoaded.map((equXl, index) => {
              return (
                <option key={index} value={equXl.xl} label={equXl.xl}></option>
              );
            })}
          </select>
          <label>XR</label>
          <select ref={xrInputRef}>
            {isLoaded.map((equXr, index) => {
              return (
                <option key={index} value={equXr.xr} label={equXr.xr}></option>
              );
            })}
          </select>
          <br></br>
          <br></br>
          <button type="submit" className="btn btn-outline-success">
            SUBMIT
          </button>
          <br></br>
          The value of root :
        </form>
        {Resul[0]}
        {Resul[1]}
        {Resul[2]}
      </center>
    </div>
  );
};

export default Bisection;
