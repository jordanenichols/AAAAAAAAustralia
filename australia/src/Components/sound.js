import * as Tone from "tone";
import React, {useState} from "react";

let sine = new Tone.Oscillator(440, "sine").toMaster();

function Sound(props) {
  const [jsonString, setJsonString] = useState({...props.jsonString});
  const [buttonOn, setButtonOn] = useState(false)

  
  // if (buttonOn) {
  //   sine.stop();
  //   // setButtonOn(false)
  //   Tone.Transport.stop();
  // } else {
  //   // setButtonOn(true)
    Tone.Transport.start();
  // }

  new Tone.Event(time => eventCallback(time, jsonString)).start();
  return (
    <div></div>
  )
}

function eventCallback(time,jsonObj) {

  sine.frequency.setValueAtTime(0, time);
  sine.start(time);
  const min = parseInt(jsonObj.pitchInterval[0],10);
  const max = parseInt(jsonObj.pitchInterval[1],10);
  const data = assignHertz(min, max, jsonObj.data, jsonObj.duration);

  for (let i = 0; i < data.hertz.length; i++) {
    sine.frequency.linearRampToValueAtTime(data.hertz[i], time+data.times[i]);
  }
  sine.stop(time + jsonObj.duration);

}

//Sets the user defined minimum Hertz and maximum Hertz values in the data file
function assignHertz(minHz, maxHz, oldData, time) {

  const data = {...oldData};
  const percentifiedData = percentifyData(data, time);
  const results = minAndMax(percentifiedData);
  const min = results[0];
  const max = results[1];

  percentifiedData.hertz = []
  const hertzRange = maxHz - minHz;
  const percentRange = max-min;
  const frac = hertzRange/percentRange;

  //replaces percentified data with hertz values. Problem if data set only length of 2
  for (let i = 0; i < data.y.length; i++) { 
    const diff = parseFloat(percentifiedData.percentages[i],10) - min;
    const final = (minHz + (diff * frac))
    percentifiedData.hertz.push(final);
  }

  let timedData = getTimes(percentifiedData, time);
  console.log("timedData: ", timedData);
  return timedData;

}

//Parses data from user defined .csv file, turns data into percentages of the sum
//of the data
function percentifyData(oldData) {

  const data = {...oldData}
  data.percentages = [];
  let sum = 0;

  for (let i = 0; i < data.y.length; i++) {
    sum += parseInt(data.y[i], 10);
  }

  for (let i = 0; i < data.y.length; i++) {
    data.percentages.push(parseInt(data.y[i],10) / sum);
  }
  return data;
}


function getTimes(data,time) {
  const [min, max] = findMinMaxX(data)
  const range = max -min;
  console.log("range", range)
  data.times = [];
  data.times.push(0)
  for(let i = 1; i < data.x.length; i++) {
    const interval = data.x[i] - data.x[i-1];
    const previous = data.times[i-1]
    const totalTime = (interval/range)*time
    // console.log("current x: ", data.x[i])
    // console.log("previous x: ", data.x[i-1])
    // console.log("interval: ", interval)
    // console.log("previous x time: ", data.times[i-1])
    // console.log("TotalTime: ",totalTime)
    data.times.push(previous+totalTime);
  }
  return data;
}

function findMinMaxX(data) {
  let min = parseFloat(data.x[0]);
  let max = parseFloat(data.x[0]);
  console.log("Min: ", min)
  console.log("Max: ", max)
  for (let i = 1; i < data.x.length; i++) { //problem if data has only one value
    console.log("current value: ", data.x[i])
    const current = parseFloat(data.x[i])
    if (max < current) { // gets the maximum
      max = current;
      console.log("new max")
    }
    if (min > current) {
      min = current;
      console.log("new min")
    }
    console.log("Min: ", min)
    console.log("Max: ", max)
  }
  return [parseFloat(min,10), parseFloat(max,10)];
}

function minAndMax(data) {
  let min = data.percentages[0];
  let max = data.percentages[0];
  for (let i = 0; i < data.percentages.length; i++) { //problem if data has only one value
    if (max < data.percentages[i]) { // gets the maximum
      max = data.percentages[i];
    }
    if (min > data.percentages[i]) {
      min = data.percentages[i];
    }
  }
  return [parseFloat(min,10), parseFloat(max,10)];
}


export default Sound;