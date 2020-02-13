import React, {useState} from 'react';
import './App.css';
import ToolBar from './Components/ToolBar';
import Graph from './Components/Graph';
import Sound, { doEverything } from './Components/Sound';

function App() {

  const [dataSet, setDataSet] = useState({"x":[""], "y":[""]});
  const [graphSelection, setGraphSelection] = useState("line");
  const [isPlaying, setIsPlaying] = useState(false);
  const [pitchLevel, setPitchLevel] = useState([300,800]);
  const [duration,setDuration] = useState(3);
  const [jsonString,setJSON] = useState();

  if(isPlaying == true){
    return(
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
      <Sound
      dataSet={dataSet}
      graphSelection={graphSelection}
      jsonString = {jsonString}
      />
    </div>
    )
  }
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
    generateJSON();
    setIsPlaying(true);
  }
  
  function generateJSON() {
    let dict = {"data": dataSet,
                "x":dataSet.x,
                "y":dataSet.y,
                "pitchInterval": pitchLevel,
                "duration": duration,
                "graph": graphSelection};
    setJSON(dict);
  }
}


export default App;


