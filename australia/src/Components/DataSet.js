import React, { useEffect, useState } from 'react';

function toDataSet(props,event,row,col) {
  console.log("row: ",row);
  console.log("col",col);
  let daddy = event.target.value;
  console.log("before ",props.dataSet)
  let arr = props.dataSet
  if (col == 1) {
    arr[row][col] = parseInt(daddy, 10);
  } else {
    arr[row][col] = daddy
  }
  props.setDataSet(arr)
  console.log("after calling toDataSet",props.dataSet)
}

function toPitchLevel(props, event, bound) {
  let input = event.target.value;
  let arr = props.pitchLevel;
  arr[bound] = input;
  props.setPitchLevel(arr);
  console.log(props.pitchLevel)
}

function toDuration(props, event) {
  let input = event.target.value;
  props.setDuration(input);
  console.log(props.duration);
}
function appendDataSet(props) {
  let current = props.dataSet;
  current.push(["",0]);
  props.setDataSet(current);
  console.log(props.dataSet);
}
function DataSet(props) {
    const [value, setValue] = useState(false);
    return (
    <div id="inputWrapper"className = "dad">
      <div id="outerInputBoxWrapper">
      {props.dataSet.map((i,index) => {
              return  <div id="outerInputBox">
                <input id="inputBox"onChange={(event) => toDataSet(props, event, index, 0)} className="x"/>
                <input id="inputBox"onChange={(event) => toDataSet(props, event, index, 1)} className="y"/>
              </div>
            })}
      </div>
      <div id="pitchBoxWrapper">
        <input id="pitchBox" onChange={(event) => toPitchLevel(props, event, 0)} className="lower"/>
        <input id="pitchBox" onChange={(event) => toPitchLevel(props, event, 1)} className="upper"/>
        </div>
        <label>Duration:
          <input onChange={(event) => toDuration(props, event)} className="duration"/>
        </label>
        <button key={props.dataSet} onClick = {() => {appendDataSet(props); setValue(!value)}}>+</button>
    </div>
      
  );
}

export default DataSet;