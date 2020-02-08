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
      {props.dataSet.map(i => {
              return  <div>
                <input onChange={(event) => toDataSet(props, event, i, 0)} className="x"/>
                <input onChange={(event) => toDataSet(props, event, i, 1)} className="y"/>
              </div>
            })}
    </div>
  );
}

export default DataSet;