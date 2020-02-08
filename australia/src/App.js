import React, {useState} from 'react';
import './App.css';
import ToolBar from './Components/ToolBar';
import Graph from './Components/Graph';

function App() {
  const [dataSet, setDataSet] = useState([["jan",400], ["feb", 372], ["mar", 609], ["apr", 513], ["may", 212], ["jun", 274], ["jul", 237], ["aug", 316], ["sep", 399], ["oct", 486], ["nov", 39], ["dec", 455]])
  const [graphSelection, setGraphSelection] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className = "App">
      <ToolBar 
        dataSet={dataSet} 
        setDataSet={setDataSet} 
        graphSelection={graphSelection}
        setGraphSelection={setGraphSelection}
        isPlaying = {isPlaying}
        setIsPlaying = {setIsPlaying}
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
