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
  const [duration,setDuration] = useState(5);
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
    orderDataSet();
    setIsPlaying(true);
  }

  
  function orderDataSet(){
    let xArr = [...dataSet.x]
    let yArr = [...dataSet.y]
    let i;
    for(i = 0; i < dataSet.x.length; i++){
      let minValue = parseInt(xArr[i]);
      let swapIndex = i;
      for(let j = i+1; j < dataSet.x.length; j++){
        if(minValue > parseInt(xArr[j]))
        {
          minValue = parseInt(xArr[j])
          swapIndex = j

          let temp = xArr[i]
          xArr[i] = xArr[swapIndex]
          xArr[swapIndex] = temp
      
          let temp2 = yArr[i]
          yArr[i] = yArr[swapIndex]
          yArr[swapIndex] = temp2
        }
      }
    }
    let dict = {"data": {"x":xArr, "y":yArr},
                "x":xArr,
                "y":yArr,
                "pitchInterval": pitchLevel,
                "duration": duration,
                "graph": graphSelection};
    setJSON(dict);
  }
}


export default App;


