import React, {useState} from 'react';
import './App.css';
import ToolBar from './Components/ToolBar';
import Graph from './Components/Graph';

function App() {
  const [dataSet, setDataSet] = useState(null)
  const [graphSelection, setGraphSelection] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div>
      <ToolBar 
        dataSet={dataSet} 
        setDataSet={setDataSet} 
        graphSelection={graphSelection}
        setGraphSelection={setGraphSelection}
        />
      <Graph
        dataSet={dataSet}
        graphSelection={graphSelection}
      />
    </div>
  );
}

export default App;
