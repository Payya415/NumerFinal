import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";
import "./table.css";
import { evaluateTex } from "tex-math-parser";

let EPSILON = 0.000001;
let xl;
let ResulTable = [];
let ResulGraph = [];
let n = 0;
let error;
let xm = xl;
let arrayOject = [];

export const FalsePositionMethod = (x, xl, xr) => {
  const functionFalsePosition = (eq, xm) => {
    const equation = evaluateTex(eq, { x: xm });
    return equation.evaluated;
  };
  if (functionFalsePosition(x, xl) * functionFalsePosition(x, xr) >= 0) {
    alert("A*B Must less than 0");
    return;
  }
  while (xr - xl >= EPSILON) {
    xm =
      (xl * functionFalsePosition(x, xr) - xr * functionFalsePosition(x, xl)) /
      (functionFalsePosition(x, xr) - functionFalsePosition(x, xl));
    if (functionFalsePosition(x, xm) === 0.0) {
      break;
    } else if (
      functionFalsePosition(x, xm) * functionFalsePosition(x, xl) <
      0
    ) {
      xr = xm;
      error = Math.abs((xr - xl) / xr).toFixed(6);
    } else {
      xl = xm;
      error = Math.abs((xl - xr) / xl).toFixed(6);
    }
    let object = { x: n, y: error };
    object.x = n;
    object.y = error;
    arrayOject.push(object);

    let table = { Xl: xl, Xr: xr, n: n, error: error };
    table.Xl = xl.toFixed(6);
    table.Xr = xr.toFixed(6);
    table.n = n;
    table.error = error;
    ResulTable.push(table);

    let graph = { x: n, y: error };
    graph.x = n;
    graph.y = error;
    ResulGraph.push(graph);
    console.log("Xl: ", xl.toFixed(6), "Xr", xr.toFixed(6));
    n++;
    console.log(n);
  }
  console.log(arrayOject);
  console.log(ResulTable);
  console.log("The value of " + "root is: " + xm.toFixed(6));
  return [
    xm,
    <table class="table table-success table-striped">
      <tbody>
        <tr>
          <th>Number</th>
          <th>Xl</th>
          <th>Xr</th>
          <th>Error</th>
        </tr>
        {ResulTable.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.n}</td>
              <td>{data.Xl}</td>
              <td>{data.Xr}</td>
              <td>{data.error}</td>
            </tr>
          );
        })}
      </tbody>
    </table>,
    <XYPlot width={400} height={400}>
      <HorizontalGridLines />
      <LineSeries data={ResulGraph} />
      <XAxis />
      <YAxis />
    </XYPlot>,
  ];
};
