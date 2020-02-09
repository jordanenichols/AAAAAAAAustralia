// let jsonObj = {
//         "data": [["jan", 400], ["feb", 372], ["mar", 609], ["apr", 513], ["may", 212], ["jun", 274], ["jul", 237], ["aug", 316], ["sep", 399], ["oct", 486], ["nov", 39], ["dec", 455]],
//         "headers": ["headers", "year"],
//         "type": "bar",
//         "min": 440,
//         "max": 1000,
//         "duration": 10
//   };
import * as Tone from "tone";

  
  
  let osc = new Tone.Oscillator(0, "sine").toMaster()
  osc.sync().start();
  
  
  export function playGraph(jsonObj) {
    Tone.Transport.toggle();
    // Tone.Transport.cancel();
    console.log("This One", jsonObj);
    let data = assign_hertz(500, 1200, jsonObj.data, jsonObj.duration);
    for(let i=0; i<data.length; i++){
      osc.frequency.linearRampToValueAtTime(data[i][1], "+"+data[i][2].toString());
    }
  }
  
  //start the transport with an offset and the sync'ed sources
  //will start in the correct position
  
  //the source will be invoked with an offset of 0.4
  // Tone.Transport.start("+0.5", 0.5);
  //schedule a few notes
  // Tone.Transport.schedule(playGraph, "+0.5");
  
  //start/stop the transport
  // document.querySelector('tone-play-toggle').addEventListener('change', e => Tone.Transport.toggle())
  
  
  function playData(jsonObj) {
    // let osc = new Tone.Oscillator(440, "sine").toMaster().start();
  
  
  
  }
  
  
  //Parses data from user defined .csv file, turns data into percentages of the sum
  //of the data
  function percentify_data(data, time) {
    // write daftaor loop
      // calculate total
      // another for loop for each data point to and replace with percentage
      let sum = 0;
      for (let i = 0; i < data.length; i++) {
          sum += data[i][1];
      }
      for (let x = 0; x < data.length; x++) {
        data[x][1] = (data[x][1] / sum);
          if (x > 0) {
              data[x].push(time * data[x][1] + data[x - 1][2]);
          }
          else {
              // console.log(data[x][1] * time)
              data[x].push(time * data[x][1]);
          }
        }
      return data;
  }
  
  
  //Finds a minimum and maximum value from .csv file
  function find_min_and_max(data) {
    let min = 0;
    let max = data[0][1];
    let list = []; //List that arranges the data based on increasing size
    let x = 0;
    let y = 0;
    for (let i = 1; i < data.length; i++) { //problem if data has only one value
      if (data[x][1] < data[i][1]) { // gets the maximum
        max = data[i][1];
        x = i;
      }
      if (data[y][1] > data[i][1]) {
        min = data[i][1];
        y = i;
      }
    }
    return [min, max];
  }
  
  
  //Sets the user defined minimum Hertz and maximum Hertz values in the data file
  function assign_hertz(minHz, maxHz, data, time) {
    let percentified_data = percentify_data(data, time);
    let percent_min_max = find_min_and_max(percentified_data);
    for (let i = 0; i < data.length; i++) { //replaces percentified data with hertz values. Problem if data set only length of 2
      percentified_data[i][1] = minHz + (percentified_data[i][1] - percent_min_max[0]) * ((maxHz - minHz) / (percent_min_max[1] - percent_min_max[0]))
    }
    return percentified_data;
  }

  
