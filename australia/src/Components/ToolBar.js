import React from 'react';
import DataSet from "./DataSet"
import GraphSelection from "./GraphSelection"
import {CSVLink} from "react-csv";


function ToolBar(props) {
  return (
    <div>
      <DataSet 
        dataSet = {props.dataSet}
        setDataSet={props.setDataSet} />
      <GraphSelection 
        graphSelection={props.graphSelection}
        setGraphSelection={props.setGraphSelection}/>
        <CSVLink data={props.dataSet}>yuh</CSVLink>
    </div>
    
  );
}

export default ToolBar;
