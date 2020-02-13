import React from 'react';
 import { ResponsivePie } from '@nivo/pie'

 function toGraphJSON(jsonString) {
    let dict = [];
    for(let i = 0; i < jsonString.x.length;i++){
        dict.push({id:jsonString.x[i].toString(),label:jsonString.x[i].toString(),value:jsonString.y[i]})
    }
    return [dict]
}

function PieChart(props) {
    let data = toGraphJSON(props.jsonString)
    let dat1 = [
        {
          "id": "ruby",
          "label": "ruby",
          "value": 269,
        },
        {
          "id": "stylus",
          "label": "stylus",
          "value": 102,
        },
        {
          "id": "css",
          "label": "css",
          "value": 504,
        }]
    return (
        <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'oranges' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="white"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        enableSlicesLabels={false}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={false}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]} />
  );
}

export default PieChart;