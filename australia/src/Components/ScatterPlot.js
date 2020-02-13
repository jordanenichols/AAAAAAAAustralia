import React from 'react';
 import { ResponsiveLine } from '@nivo/line'

 function toGraphJSON(jsonString) {
    let dict = [];
    for(let i = 0; i < jsonString.x.length;i++){
        dict.push({x:jsonString.x[i],y:jsonString.y[i]})
    }
    return [{"data":dict}]
}


function ScatterPlot(props) {
    let dat1 = toGraphJSON(props.jsonString)
    return (
        <ResponsiveLine
            data={dat1}
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
            colors={{ scheme: 'oranges' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
        />
  );
}

export default ScatterPlot;