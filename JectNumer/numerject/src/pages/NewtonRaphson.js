// import React, { useState } from "react";
// import { NewtonRaphsonMethod } from "../modules/NewtonRaphson";
// const NewtonRaphson = () => {
//   const [PT,setPT] = useState("");
//   const [xi, setXi] = useState("");
//   const [n, setN] = useState("");
//   const [Resul, setResult] = useState("");

//   const PTinput = (event) =>{
//     setPT(event.target.value);
//   };
//   const Xlinput = (event) => {
//     setXl(event.target.value);
//   };
//   const Xiinput = (event) => {
//     setN(event.target.value);
//   };
//   const submitHandler = (event) => {
//     event.preventDefault(); //ป้องกันการรีเฟช
//     console.log(n, xi);
//     let XlFloat = parseFloat(n);
//     let XrFloat = parseFloat(xi);
//     setResult(NewtonRaphsonMethod(PT,XlFloat, XrFloat)); 
//     console.log(Resul);
//     setPT("");
//     setXi("");
//     setN("");
//   };
 
//   return (
//     <div>
//         <center><h1>Newton Raphson</h1>
//         <form onSubmit={submitHandler}>
//         <label>โจทย์</label>
//         <input type="text" value={PT} onChange={PTinput}/>
//         <br></br>
//         <br></br>
//         <label>XL</label>
//         <input type='text' value={xi} onChange={Xiinput} />
//         <label>XR</label>
//         <input type='text' value={n} onChange={ninput} />
//         <br></br>
//         <br></br>
//         <button type='submit' className='btn btn-outline-success'>SUBMIT</button>
//         <br></br>
//         The value of root :
       
//       </form>
//       </center>
//       </div>
//   );
// };

// export default NewtonRaphson;
