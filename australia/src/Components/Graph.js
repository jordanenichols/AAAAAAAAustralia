import React from 'react';
import LineGraph from './LineGraph'
import '../App.css';

function Graph(props) {
  return (
    <div className="graph">
      <LineGraph
        jsonString = {props.jsonString}
      />
      </div>
  );
}

export default Graph;