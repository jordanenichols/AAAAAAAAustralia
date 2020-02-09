import React, {useState} from 'react';
import './App.css';
import ToolBar from './Components/ToolBar';
import Graph from './Components/Graph';
import { doEverything } from './Components/sound';

function App() {
  const [dataSet, setDataSet] = useState({"x":["1,2,3"], "y":["4,6,20"]});
  const [graphSelection, setGraphSelection] = useState("line");
  const [isPlaying, setIsPlaying] = useState(false);
  const [pitchLevel, setPitchLevel] = useState([300,800]);
  const [duration,setDuration] = useState(3);
  const [jsonString,setJSON] = useState({"x":[], "y":[]});
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
        jsonString = {jsonString}
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
    setJSON(dict.data);
    return dict;
  }
}


export default App;


