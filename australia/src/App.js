import React, {useState} from 'react';
import './App.css';
import ToolBar from './Components/ToolBar';
import Graph from './Components/Graph';

function App() {
  const [dataSet, setDataSet] = useState([["",""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""], ["", ""]])
  const [graphSelection, setGraphSelection] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
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
        />
      <Graph
        dataSet={dataSet}
        graphSelection={graphSelection}
        isPlaying = {isPlaying}
        setIsPlaying = {setIsPlaying}
      />
    </div>
  );
}

export default App;
