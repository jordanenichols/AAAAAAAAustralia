import React, { useEffect, useState } from 'react';

function toDataSet(props,event, row, col) {
  // console.log("row: ",row);
  // console.log("col: ",col);
  const currentTextBox = event.target;
  const currentVal = currentTextBox.value;
  // update contents of dataSet
  if(col=="x"){
    props.dataSet.x[row] = currentVal;
  } else {
    props.dataSet.y[row] = currentVal;
  }
  props.setDataSet({"x":props.dataSet.x, "y":props.dataSet.y});

  console.log("after calling toDataSet",props.dataSet)
}

function toPitchLevel(props, event, bound) {
  let input = event.target.value;
  let arr = props.pitchLevel;
  arr[bound] = input;
  props.setPitchLevel(arr);
  console.log("dis the pitch",props.pitchLevel)
}

function toDuration(props, event) {
  let input = event.target.value;
  props.setDuration(input);
  console.log(props.duration);
}
function appendDataSet(props) {
  let current = props.dataSet;
  console.log("dis what we workin with", current);
  current.x.push("woo");
  current.y.push(97);
  props.setDataSet(current);
}

function dataRows(props) {
  return props.dataSet.x.map((i,row) =>  
    <div>
       <input className="inputBox" data-name="x" onChange={(event) => toDataSet(props, event, row, "x")} />
       <input className="inputBox" data-name="y" onChange={(event) => toDataSet(props, event, row, "y")} />
     </div>
   );
}
function DataSet(props) {
    const [value, setValue] = useState(0);
    return (
    <div className = "inputField">
      <label>Inputs: </label>
      <div className="DataSet">
          {dataRows(props)}
      </div>
      <button className="addEntry" key={props.dataSet} onClick = {() => {appendDataSet(props); setValue(!value)}}>+</button>
      <div className="pitchBox">
        <input placeholder="300" className="inputBox"  onChange={(event) => toPitchLevel(props, event, 0)}/>
        <input placeholder="500" className="inputBox"  onChange={(event) => toPitchLevel(props, event, 1)}/>
        </div>
        <label>Duration (sec):
          <input placeholder="3" onChange={(event) => toDuration(props, event)} className="duration"/>
        </label>
    </div>
      
  );
}

export default DataSet;