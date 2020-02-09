import React from 'react';
import DataSet from "./DataSet"
import GraphSelection from "./GraphSelection"
import {CSVLink} from "react-csv";

function processData(props){
  let data = generateJSON(props);
  
}

function generateJSON(props) {
  let dict = {"data": props.dataSet,
              "pitchInterval": props.pitchLevel,
              "duration": props.duration,
              "graph": props.graphSelection};
  return JSON.stringify(dict);
}

function ToolBar(props) {
  return (
    <div>
      <DataSet 
        dataSet = {props.dataSet}
        setDataSet={props.setDataSet} 
        pitchLevel = {props.pitchLevel}
        setPitchLevel = {props.setPitchLevel}
        duration = {props.duration}
        setDuration = {props.setDuration}
        />
      <GraphSelection 
        graphSelection={props.graphSelection}
        setGraphSelection={props.setGraphSelection}/>
        <CSVLink onClick ={() => {props.setIsPlaying(true)}} data={props.dataSet}>yuh</CSVLink>
      <button onClick = {() => processData(props)}>PLAY</button>
    </div>
    
  );
}

export default ToolBar;
