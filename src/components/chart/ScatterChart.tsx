import React from 'react';
import {Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend} from 'chart.js';
import {Scatter} from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const dataValue = [{x: -71, y: 85}, {x: 84, y: -50}, {x: 32, y: -15}, {x: -70, y: 72}, {x: 93, y: -84}, {x: 38, y: -88}, {x: 9, y: -8}, {x: -24, y: -76}, {x: 73, y: -28}, {x: -40, y: 10},
    {x: 99, y: -9}, {x: -58, y: -37}, {x: -45, y: -88}, {x: 10, y: -72}, {x: -94, y: -26}, {x: -73, y: -43}, {x: -3, y: -76}, {x: 87, y: 62}, {x: -9, y: -96}, {x: 77, y: -14},
    {x: 7, y: 10}, {x: 14, y: -63}, {x: 22, y: 32}, {x: -33, y: -26}, {x: -90, y: 59}, {x: 6, y: -34}, {x: 7, y: -60}, {x: -41, y: -46}, {x: -100, y: 51}, {x: -87, y: 41},
    {x: 2, y: -28}, {x: -74, y: -35}, {x: 58, y: 13}, {x: -9, y: -76}, {x: 39, y: -2}, {x: 30, y: -84}, {x: -52, y: 22}, {x: 84, y: 83}, {x: 18, y: -8}, {x: -26, y: 81},
    {x: -15, y: 64}, {x: 41, y: 50}, {x: 25, y: -50}, {x: -70, y: 17}, {x: -77, y: -9}, {x: -52, y: 19}, {x: 99, y: -10}, {x: -26, y: -57}, {x: 84, y: -90}, {x: 14, y: -90},
    {x: -80, y: 26}, {x: 60, y: -54}, {x: 54, y: 10}, {x: 31, y: 60}, {x: -70, y: 93}, {x: 10, y: -73}, {x: 4, y: -2}, {x: -65, y: 23}, {x: -19, y: -85}, {x: 57, y: 17}, {x: 31, y: -45},
    {x: 47, y: -22}, {x: -8, y: 50}, {x: 20, y: 58}, {x: -13, y: -18}, {x: 92, y: 97}, {x: 38, y: 36}, {x: -24, y: 13}, {x: -15, y: 61}, {x: 15, y: -94}, {x: -14, y: 60},
    {x: -59, y: -81}, {x: -74, y: 96}, {x: 30, y: -29}, {x: -19, y: -43}, {x: -31, y: 67}, {x: 96, y: 40}, {x: 58, y: -29}, {x: -5, y: 17}, {x: 9, y: 74}, {x: -52, y: 42},
    {x: -83, y: 100}, {x: -53, y: 63}, {x: -46, y: 62}, {x: -100, y: -53}, {x: 97, y: -95}, {x: -23, y: 23}, {x: 84, y: -83}, {x: 13, y: -93}, {x: 22, y: 53}, {x: 17, y: 68},
    {x: -88, y: 0}, {x: -29, y: 57}, {x: -78, y: 91}, {x: 85, y: 65}, {x: 72, y: -18}, {x: -25, y: -88}, {x: -25, y: -11}, {x: 90, y: -41}, {x: -18, y: -25}];

const data = {
    datasets: [
        {
            label: 'A dataset',
            data: dataValue,
            backgroundColor: 'rgba(255, 99, 132, 1)',
        },
    ],
};

export default function ScatterChart() {
    return <Scatter options={options} data={data}/>;
}
