import React from 'react';
import DataSet from "./DataSet"
import GraphSelection from "./GraphSelection"


function ToolBar(props) {
  return (
    <div>
      <DataSet 
        dataSet = {props.dataSet}
        setDataSet={props.setDataSet} />
      <GraphSelection 
        graphSelection={props.graphSelection}
        setGraphSelection={props.setGraphSelection}/>
    </div>
  );
}

export default ToolBar;
