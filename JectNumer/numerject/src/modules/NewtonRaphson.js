import React from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";
import './table.css'
import { derivative } from 'mathjs'
import { evaluateTex } from 'tex-math-parser'

let EPSILON = 0.000001;
let ResulTable = [];
let ResulGraph = [];
let n = 0;
let x;
let f2xi
let error;
let ArrayOject = []

export const NewtonRaphsonMethod = (eq,xm, n) => {
  const functionNewtonRaphson= (eq,xm) =>{
    const equation = evaluateTex(eq,{x:xm})
    return equation.evaluated
  }
  const fxi = functionNewtonRaphson(eq,xm)
  const f2xi = derivative(eq, 'x').evaluate({ x: xm })

    x = xm - fxi/f2xi
    error = Math.abs((x-xm)/x) 
    console.log('round',n)
    console.log('x',x)
    console.log('error', error.toFixed(6))

    let object = {x:n,y:error}
    object.x = n
    object.y = error.toFixed(6)
    ArrayOject.push(object)

  
let TableObject = { n: n, x: x, errorTable: error }
TableObject.n = n
TableObject.x = x
TableObject.errorTable = Error.toFixed(6)
ResulTable.push(TableObject)

if (Error < EPSILON) {
    console.log('result is ', x)
    console.log(ArrayOject)
    console.log(ResulTable)
} else {
    n++
    NewtonRaphsonMethod(eq, x, n)
}  
    
  console.log(ArrayOject);
  console.log(ResulTable);
  console.log( "The value of root is: " + xm.toFixed(6));
  return [xm,
    <table class="table table-success table-striped">
      <tbody>
        <tr>
          <th>Number</th>
          <th>X</th>
          <th>Error</th>
        </tr>
        {ResulTable.map((data, index) => {
          return (
            <tr key={index}>
                <td>{data.n}</td>
              <td>{data.X}</td>
              <td>{data.errorTable}</td>
            </tr>
          );
        })}
      </tbody>
    </table>,
    <XYPlot width={400} height={400}>
      <HorizontalGridLines />
      <LineSeries data={ArrayOject} />
      <XAxis />
      <YAxis />
    </XYPlot>,
  ];

}