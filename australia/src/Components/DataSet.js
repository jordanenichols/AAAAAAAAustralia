import React, {useState} from 'react';

function toDataSet(props,event,row,col) {
  let daddy = event.target.value;
  console.log("before ",props.dataSet)
  let arr = props.dataSet
  arr[row][col] = daddy
  props.setDataSet(arr)
  console.log("after calling toDataSet",props.dataSet)
}

function toPitchLevel(props, event, bound) {
  let input = event.target.value;
  let arr = props.pitchLevel;
  arr[bound] = input;
  props.setPitchLevel(arr);
}
function DataSet(props) {
    return (
    <div className = "dad">
      {props.dataSet.map(i => {
              return  <div>
                <input onChange={(event) => toDataSet(props, event, i, 0)} className="x"/>
                <input onChange={(event) => toDataSet(props, event, i, 1)} className="y"/>
              </div>
            })}
            <input onChange={(event) => toPitchLevel(props, event, 0)} className="lower"/>
            <input onChange={(event) => toPitchLevel(props, event, 1)} className="upper"/>
    </div>
      
  );
}

export default DataSet;