import React from 'react';

function toDataSet(props,event,row,col) {
  console.log("row: ",row);
  console.log("col",col);
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
  console.log(props.pitchLevel)
}

function toDuration(props, event) {
  let input = event.target.value;
  props.setDuration(input);
  console.log(props.duration);
}
function DataSet(props) {
    return (
    <div className = "dad">
      {props.dataSet.map((i,index) => {
              return  <div>
                <input onChange={(event) => toDataSet(props, event, index, 0)} className="x"/>
                <input onChange={(event) => toDataSet(props, event, index, 1)} className="y"/>
              </div>
            })}
      <label>Min Pitch:  
        <input onChange={(event) => toPitchLevel(props, event, 0)} className="lower"/>
        </label>
        <label>Max Pitch:  
        <input onChange={(event) => toPitchLevel(props, event, 1)} className="upper"/>
        </label>
        <label>Duration:
          <input onChange={(event) => toDuration(props, event)} className="duration"/>
        </label>
    </div>
      
  );
}

export default DataSet;