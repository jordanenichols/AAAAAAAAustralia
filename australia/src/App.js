import React, {useState} from 'react';
import './App.css';
import ToolBar from './Components/ToolBar';
import Graph from './Components/Graph';

function App() {
  const [dataSet, setDataSet] = useState([["",0]])
  const [graphSelection, setGraphSelection] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [pitchLevel, setPitchLevel] = useState([0,0]);
  const [duration,setDuration] = useState(3);
  const [jsonString,setJSON] = useState();
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
    let data = generateJSON();
    
  }
  
  function generateJSON() {
    let dict = {"data": dataSet,
                "pitchInterval": pitchLevel,
                "duration": duration,
                "graph": graphSelection};
    setJSON(JSON.stringify(dict))
    console.log(jsonString)
    return JSON.stringify(dict);
  }
}


export default App;


