import React from 'react';
import LineGraph from './LineGraph'
import BarGraph from "./BarGraph"
import PieChart from "./PieChart"
import ScatterPlot from "./ScatterPlot"
import '../App.css';

function Graph(props) {
  console.log(props.graphSelection)
  if(props.graphSelection == "line"){
    return(
      <div className="graph">
      <LineGraph jsonString = {props.jsonString}/>
      </div>
    )
  }
  else if(props.graphSelection == "bar"){
    return(
      <div className="graph">
      <BarGraph jsonString = {props.jsonString}/>
      </div>
    )
  }
  else if(props.graphSelection == "pie"){
    return(
      <div className="graph">
      <PieChart jsonString = {props.jsonString}/>
      </div>
    )
  }
    return(
      <div className="graph">
      <ScatterPlot jsonString = {props.jsonString}/>
      </div>
    )
}

export default Graph;