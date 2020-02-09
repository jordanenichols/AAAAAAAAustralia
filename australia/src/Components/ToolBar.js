import React from 'react';
import DataSet from "./DataSet"
import GraphSelection from "./GraphSelection"
// import main from "./foo.js"
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
    <div className="toolBar">
            <svg className = "logo"xmlns="http://www.w3.org/2000/svg" fill="#88d3cb" viewBox="0 0 84 28"><path d="M9.6 20.5c.3 0 .6.1.8.2s.3.4.3.6c0 .3-.1.5-.2.7-.2.1-.4.2-.7.2h-8c-.3 0-.6-.1-.8-.2s-.3-.4-.3-.7.1-.5.2-.6c.2-.1.4-.2.7-.2h2.1V13h-2c-.3 0-.6-.1-.8-.2-.2-.2-.3-.4-.3-.7s.1-.5.3-.7.4-.2.7-.2h1.9v-.8C3.6 9 4 7.9 4.8 7.2s2.2-1 4.1-1c.9 0 1.6.1 2 .3s.7.5.7 1c0 .3-.1.5-.3.6-.2.2-.4.2-.7.2-.1 0-.5 0-1.1-.1-.5-.1-1-.1-1.4-.1-.9 0-1.6.2-2 .6s-.6 1-.6 1.9v.7h4.3c.3 0 .6.1.8.2s.3.4.3.7-.1.5-.3.7c-.2.1-.4.1-.7.1H5.6v7.5h4zM23.3 7.9c0 .2-.1.5-.4 1.1l-.6 1.3c-.6 1.3-.9 2.5-1.2 3.6-.2 1.1-.3 2.2-.3 3.3s.1 2.1.3 3.1.5 2 .9 3l.8 1.9c.4.7.5 1.2.5 1.3 0 .2 0 .3-.1.4s-.2.2-.3.2c-.3 0-.5-.1-.8-.4s-.7-.7-1.1-1.3c-.9-1.2-1.5-2.6-2-3.9a15.4 15.4 0 0 1-.6-4.3 16 16 0 0 1 .5-3.9c.4-1.2.9-2.5 1.6-3.6.5-.8.9-1.4 1.3-1.7.4-.4.8-.6 1.1-.6.1 0 .2.1.3.2.1 0 .1.1.1.3zm55.1 18.7c0-.2.1-.5.4-1.1l.6-1.3 1.2-3.6c.3-1.1.4-2.2.4-3.3a16.28 16.28 0 0 0-.3-3.1c-.2-1-.5-2-.9-3L79 9.3c-.3-.7-.5-1.2-.5-1.4s0-.3.1-.4.2-.2.3-.2c.3 0 .6.1.9.4l.9 1.3c.9 1.2 1.5 2.5 2 3.9s.6 2.8.6 4.3a16 16 0 0 1-.5 3.9c-.4 1.3-.9 2.5-1.6 3.6-.5.8-.9 1.4-1.3 1.8s-.7.6-1 .6c-.1 0-.2-.1-.3-.2s-.2-.2-.2-.3z"/><path d="M29 21.3s2-9.6 4.8-9.6c4.2 0 4.2 15 8 15C46 26.6 47 2 51.5 2s5.5 24.6 9.6 24.6c2.9 0 3.9-15 8-15 2.8 0 4.8 9.6 4.8 9.6" fill="none" stroke="#88d3cb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" flil/></svg>

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
      <button onClick = {() => processData(props)}>PLAY</button>
    </div>
    
  );
}

export default ToolBar;
