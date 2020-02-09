import * as Tone from "tone";
import React from "react"
let jsonObj = {
  "x": ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
  "y": [400, 372, 609, 312, 212, 534, 274, 237, 316, 399, 68, 390, 1000],
  "percentages": [],
  "tones": [],
  "labels": ["month", "children"],
  "type": "bar",
  "min": 440,
  "max": 1000,
  "duration": 10
};
// let jsonObj;
// jsonObj=null;
// let jsonObj = null;
let sine = new Tone.Oscillator(440, "sine").toMaster();

function eventCallback(time) {
  // console.log(time);
  sine.frequency.setValueAtTime(0, time);
  sine.start(time);
  let data = assign_hertz(500, 1200, jsonObj.data, jsonObj.duration);
  for (let i = 0; i < data.length; i++) {
    sine.frequency.linearRampToValueAtTime(data[i][1], data[i][2]);
  }
  sine.stop(time + jsonObj.duration);
}
let event = new Tone.Event(eventCallback).start();
let buttonOn = false;


export function doEverything(obj) {
  //  console.log("test", jsonObj);
  console.log("original object in sound.js:", obj);
  jsonObj = JSON.parse(JSON.stringify(obj));
  console.log("stringified and parsed object:", jsonObj);
  console.log("MODIFICATION TEST===================")
  // jsonObj.x = [];
  console.log("jsonObj.x = ", jsonObj.x);
  console.log('obj.x = ', obj.x);
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
    // if (i > 0) {
    //   newData.y[i] = (time * newData.y[i] + newData.y[i - 1]);
    // }
    // else {
    //   // console.log(newData[i][1] * time)
    //   console.log("NEWWWW DATA", newData.y[i]);
    //   newData.y[i] = (time * newData.y[i]);
    // }
  }
  return newData;
}


function calculateTimes(data, timeTotal) {
  const newData = JSON.parse(JSON.stringify(data));
  newData.times = [];
  for (let i = 0; i<newData.percentages; i++) {

  }
}


//Finds a minimum and maximum value from .csv file
function find_min_and_max(data) {
  let min = data.y[0];
  let max = data.y[0];
  let list = []; //List that arranges the data based on increasing size
  let x = 0;
  let y = 0;
  for (let i = 1; i < data.length; i++) { //problem if data has only one value
    if (data.y[x] < data.y[i]) { // gets the maximum
      max = data.y[i];
      x = i;
    }
    if (data.y[y] > data.y[i]) {
      min = data.y[i];
      y = i;
    }
  }
  return [min, max];
}


//Sets the user defined minimum Hertz and maximum Hertz values in the data file
function assign_hertz(minHz, maxHz, data, time) {
  const newData = JSON.parse(JSON.stringify(data));

  console.log("d", newData);
  let percentified_data = percentify_data(newData, time);
  console.log("percentboi?", percentified_data);
  console.log("d", newData);

  let percent_min_max = find_min_and_max(percentified_data);
  console.log("mini?", percent_min_max);
  console.log("d", newData);
  for (let i = 0; i < newData.length; i++) { //replaces percentified data with hertz values. Problem if data set only length of 2
    percentified_data[i][1] = minHz + (percentified_data[i][1] - percent_min_max[0]) * ((maxHz - minHz) / (percent_min_max[1] - percent_min_max[0]))
  }
  return percentified_data;
}


