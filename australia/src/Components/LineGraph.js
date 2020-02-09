import React from 'react';
 import { ResponsiveLine } from '@nivo/line'

function toGraphJSON(jsonString) {
    console.log(jsonString)
    let dict = [];
    for(let i = 0; i < jsonString.x.length;i++){
        dict.push({x:jsonString.x[i],y:jsonString.y[i]})
    }
    console.log(dict)
    return [{"data":dict}]
}

function LineGraph(props) {
    let dat = toGraphJSON(props.jsonString)
  return (
        <ResponsiveLine
            data={dat}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            enablePoints = {false}
            isInteractive = {false}
            colors={{ scheme: 'oranges' }}
            useMesh={false}
        />
  );
}

export default LineGraph;