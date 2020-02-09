import * as Tone from "tone";
import React from "react"
let jsonObj = {
  "x": ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
  "y": [400, 372, 609, 312, 212, 534, 274, 237, 316, 399, 68, 390, 1000],
  "percentages": [],
  "tones": [],
  "labels": ["month", "children"],
  "type": "bar",
  "pitchInterval":[200,800],
  "duration": 10
};
// let jsonObj;
// jsonObj=null;
// let jsonObj = null;
let sine = new Tone.Oscillator(440, "sine").toMaster();


function eventCallback(time) {
  sine.frequency.setValueAtTime(0, time);
  sine.start(time);
  let data = assign_hertz(parseInt(jsonObj.pitchInterval[0],10), parseInt(jsonObj.pitchInterval[1],10), jsonObj.data, jsonObj.duration);
  console.log("YO THIS THE ONE?", data);  
  for (let i = 0; i < data.hertz.length; i++) {

    sine.frequency.linearRampToValueAtTime(data.hertz[i], time+data.times[i]);
  }
  sine.stop(time + jsonObj.duration);
}
let event = new Tone.Event(eventCallback).start();
let buttonOn = false;

export function doEverything(obj) {
  jsonObj = JSON.parse(JSON.stringify(obj));
  if (buttonOn) {
    sine.stop();
    buttonOn = false;
    Tone.Transport.stop();
  } else {
    buttonOn = true;
    Tone.Transport.start();
  }
}

//Parses data from user defined .csv file, turns data into percentages of the sum
//of the data
function percentify_data(data) {
  // write daftaor loop
  // calculate total
  // another for loop for each data point to and replace with percentage
  const newData = JSON.parse(JSON.stringify(data));
  newData.percentages = [];
  console.log("THE YVALS", newData.y);
  let sum = 0;
  for (let i = 0; i < newData.y.length; i++) {
    sum += parseInt(newData.y[i], 10);
  }
  console.log("SUM:", sum);
  for (let i = 0; i < newData.y.length; i++) {
    newData.percentages.push(parseInt(newData.y[i],10) / sum);
  }
  return newData;
}


function getTimes(data) {
  let [min, max] = findMinMaxX(data)
  let interval = max - min;
  data.times = [];
  for(let i = 0; i < data.x.length; i++) {
    data.times.push((parseFloat(data.x[i], 10) / interval) * parseFloat(jsonObj.duration, 10));
  }
  return data;
}

function findMinMaxX(data) {
  let min = data.x[0];
  let max = data.x[0];
  for (let i = 0; i < data.x.length; i++) { //problem if data has only one value
    if (max < data.x[i]) { // gets the maximum
      max = data.x[i];
    }
    if (min > data.x[i]) {
      min = data.x[i];
    }
  }
  return [parseFloat(min,10), parseFloat(max,10)];
}

//Finds a minimum and maximum value from .csv file
function find_min_and_max(data) {
  let min = data.y[0];
  let max = data.y[0];
  for (let i = 0; i < data.y.length; i++) { //problem if data has only one value
    if (max < data.y[i]) { // gets the maximum
      max = data.y[i];
    }
    if (min > data.y[i]) {
      min = data.y[i];
    }
  }
  return [parseFloat(min,10), parseFloat(max,10)];
}

function percent_find_min_and_max(data) {
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

//Sets the user defined minimum Hertz and maximum Hertz values in the data file
function assign_hertz(minHz, maxHz, data, time) {
  minHz = parseInt(minHz, 10);
  maxHz = parseInt(maxHz, 10);
  const newData = JSON.parse(JSON.stringify(data));
  let percentified_data = percentify_data(newData, time);
  let percent_min_max = percent_find_min_and_max(percentified_data);
  percentified_data.hertz = []
  let hzRange = maxHz - minHz;
  let percentRange = (percent_min_max[1]-percent_min_max[0]);
  let frac = hzRange/percentRange;
  for (let i = 0; i < newData.y.length; i++) { //replaces percentified data with hertz values. Problem if data set only length of 2
    let diff = parseFloat(percentified_data.percentages[i],10) - percent_min_max[0];
    let final = (minHz + (diff * frac))
    percentified_data.hertz.push(final);
  }
  let timed_data = getTimes(percentified_data);
  console.log("AKK", timed_data);
  return timed_data;
}


