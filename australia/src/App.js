import React, {useState} from 'react';
import './App.css';
import ToolBar from './Components/ToolBar';
import Graph from './Components/Graph';
import { doEverything } from './Components/sound';

function App() {
  const [dataSet, setDataSet] = useState({"x":[], "y":[]});
  const [graphSelection, setGraphSelection] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [pitchLevel, setPitchLevel] = useState([0,0]);
  const [duration,setDuration] = useState(3);
  return (
    <div className = "App">
      <ToolBar 
        dataSet={dataSet} 
        setDataSet={setDataSet} 
        graphSelection={graphSelection}
        setGraphSelection={setGraphSelection}
        isPlaying = {isPlaying}
        setIsPlaying = {setIsPlaying}
        pitchLevel = {pitchLevel}
        setPitchLevel = {setPitchLevel}
        duration = {duration}
        setDuration = {setDuration}
        processData = {processData}
        />
      <Graph
        dataSet={dataSet}
        graphSelection={graphSelection}
        isPlaying = {isPlaying}
        setIsPlaying = {setIsPlaying}
      />

    </div>
  );
  function processData(){
    
    // console.log("hello! I pass data,", data);
    doEverything(generateJSON());
    
  }
  
  function generateJSON() {
    console.log("REEEE",dataSet);
    
    let dict = {"data": dataSet,
                "x":dataSet.x,
                "y":dataSet.y,
                "pitchInterval": pitchLevel,
                "duration": duration,
                "graph": graphSelection};
    console.log("I am a dichead", dict);
    console.log("am i the same?", dict);
    return dict;
  }
}


export default App;


