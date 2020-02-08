import React, {useState} from 'react';

function toDataSet(props,event,row,col) {
  let daddy = event.target.value;
  console.log("before ",props.dataSet)
  let arr = props.dataSet
  arr[row][col] = daddy
  props.setDataSet(arr)
  console.log("after calling toDataSet",props.dataSet)
}
function DataSet(props) {
    return (
    <div className = "dad">
      <div className = "input">
        <input onChange={(event) => toDataSet(props, event, 1, 0)} className="x"/>
        <input onChange={(event) => toDataSet(props, event, 1, 1)} className="y"/>
      </div>
      <div className = "input">
        <input onChange={(event) => toDataSet(props, event, 2, 0)} className="x"/>
        <input onChange={(event) => toDataSet(props, event, 2, 1)} className="y"/>
      </div>
      <div className = "input">
        <input onChange={(event) => toDataSet(props, event, 3, 0)} className="x"/>
        <input onChange={(event) => toDataSet(props, event, 3, 1)} className="y"/>
      </div>
      <div className = "input">
        <input onChange={(event) => toDataSet(props, event, 4, 0)} className="x"/>
        <input onChange={(event) => toDataSet(props, event, 4, 1)} className="y"/>
      </div>
      <div className = "input">
        <input onChange={(event) => toDataSet(props, event, 5, 0)} className="x"/>
        <input onChange={(event) => toDataSet(props, event, 5, 1)} className="y"/>
      </div>
      <div className = "input">
        <input onChange={(event) => toDataSet(props, event, 6, 0)} className="x"/>
        <input onChange={(event) => toDataSet(props, event, 6, 1)} className="y"/>
      </div>
      <div className = "input">
        <input onChange={(event) => toDataSet(props, event, 7, 0)} className="x"/>
        <input onChange={(event) => toDataSet(props, event, 7, 1)} className="y"/>
      </div>
      <div className = "input">
        <input onChange={(event) => toDataSet(props, event, 8, 0)} className="x"/>
        <input onChange={(event) => toDataSet(props, event, 8, 1)} className="y"/>
      </div>
      <div className = "input">
        <input onChange={(event) => toDataSet(props, event, 9, 0)} className="x"/>
        <input onChange={(event) => toDataSet(props, event, 9, 1)} className="y"/>
      </div>
      <div className = "input">
        <input onChange={(event) => toDataSet(props, event, 10, 0)} className="x"/>
        <input onChange={(event) => toDataSet(props, event, 10, 1)} className="y"/>
      </div>
      <div className = "input">
        <input onChange={(event) => toDataSet(props, event, 11, 0)} className="x"/>
        <input onChange={(event) => toDataSet(props, event, 11, 1)} className="y"/>
      </div>
      <div className = "input">
        <input onChange={(event) => toDataSet(props, event, 12, 0)} className="x"/>
        <input onChange={(event) => toDataSet(props, event, 12, 1)} className="y"/>
      </div>
    </div>
  );
}

export default DataSet;