import React from 'react';


function GraphSelection(props) {
  return (
    <div className="graphTypes">
      <button id="line" onClick={()=>{props.setGraphSelection("line")}}>Line Graph</button>
      <button id="pie" onClick={()=>{props.setGraphSelection("pie")}}>Pie Chart</button>
      <button id="scatter" onClick={()=>{props.setGraphSelection("scatter")}}>Scatter Plot</button>
      <button id="bar" onClick={()=>{props.setGraphSelection("bar")}}>Bar Graph</button>
    </div>
  );
}

export default GraphSelection;