import React from 'react';
import {Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend} from 'chart.js';
import {Bubble} from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const data1 = [{x: -75, y: -67, r: 8}, {x: -14, y: 31, r: 18}, {x: -79, y: -39, r: 18}, {x: 46, y: 85, r: 14}, {x: -6, y: 73, r: 9}, {x: 9, y: -19, r: 11}, {x: 41, y: 88, r: 9},
    {x: -67, y: 16, r: 6}, {x: -94, y: 39, r: 8}, {x: -3, y: -54, r: 13}, {x: 57, y: 82, r: 10}, {x: -39, y: 54, r: 19}, {x: 59, y: 81, r: 12}, {x: -95, y: 36, r: 20}, {x: -16, y: 16, r: 9},
    {x: 86, y: -59, r: 10}, {x: 73, y: -93, r: 9}, {x: 6, y: -74, r: 7}, {x: 73, y: 42, r: 6}, {x: 36, y: -14, r: 18}, {x: -24, y: 25, r: 13}, {x: -26, y: -3, r: 15}, {x: 53, y: 92, r: 7},
    {x: 5, y: -86, r: 18}, {x: 15, y: -40, r: 14}, {x: 100, y: -64, r: 5}, {x: 82, y: -91, r: 6}, {x: 29, y: -64, r: 5}, {x: 41, y: -75, r: 8}, {x: 47, y: -24, r: 15}, {x: 53, y: 31, r: 20},
    {x: 68, y: -17, r: 16}, {x: -92, y: 18, r: 18}, {x: 79, y: -52, r: 14}, {x: -4, y: -69, r: 11}, {x: -64, y: -87, r: 17}, {x: 62, y: -81, r: 5}, {x: -84, y: 46, r: 10},
    {x: 23, y: 25, r: 5}, {x: 59, y: -55, r: 17}, {x: 92, y: -48, r: 20}, {x: -87, y: -5, r: 11}, {x: -31, y: 50, r: 7}, {x: -12, y: -78, r: 13}, {x: 15, y: 6, r: 19}, {x: 69, y: 63, r: 5},
    {x: -32, y: -32, r: 8}, {x: 19, y: -10, r: 15}, {x: -12, y: 28, r: 8}, {x: 87, y: 97, r: 11}];

const data2 = [{x: -56, y: -30, r: 9}, {x: -8, y: -52, r: 16}, {x: -30, y: 64, r: 17}, {x: 38, y: -3, r: 15}, {x: 70, y: 18, r: 19}, {x: 72, y: -73, r: 13}, {x: 79, y: -54, r: 15},
    {x: 25, y: -16, r: 20}, {x: -59, y: -78, r: 8}, {x: -17, y: 78, r: 12}, {x: 78, y: -59, r: 16}, {x: 86, y: 67, r: 6}, {x: -36, y: 61, r: 8}, {x: -45, y: -54, r: 19}, {x: -49, y: 60, r: 8},
    {x: 22, y: -10, r: 11}, {x: 29, y: 71, r: 17}, {x: 80, y: 33, r: 8}, {x: -89, y: 69, r: 6}, {x: 10, y: 83, r: 18}, {x: 95, y: 13, r: 12}, {x: -83, y: -61, r: 20}, {x: -9, y: 47, r: 19},
    {x: 66, y: -64, r: 5}, {x: 42, y: 25, r: 19}, {x: 22, y: 99, r: 20}, {x: 28, y: 0, r: 17}, {x: 65, y: -74, r: 7}, {x: 25, y: -81, r: 7}, {x: 78, y: 29, r: 15}, {x: -69, y: -48, r: 16},
    {x: 60, y: -47, r: 13}, {x: 26, y: -79, r: 20}, {x: -54, y: -21, r: 17}, {x: 15, y: 41, r: 15}, {x: -13, y: 82, r: 7}, {x: -66, y: -49, r: 7}, {x: 95, y: -54, r: 5}, {x: 44, y: -95, r: 8},
    {x: 21, y: -69, r: 8}, {x: 12, y: 52, r: 15}, {x: -77, y: -12, r: 17}, {x: -74, y: 27, r: 18}, {x: -4, y: -62, r: 12}, {x: 35, y: 71, r: 19}, {x: 78, y: -16, r: 14}, {x: 83, y: -89, r: 20},
    {x: -26, y: 94, r: 17}, {x: -4, y: -94, r: 13}, {x: -31, y: -21, r: 12}];

const data = {
    datasets: [
        {
            label: 'Red dataset',
            data: data1,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Blue dataset',
            data: data2,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export default function BubbleChart() {
    return <Bubble options={options} data={data}/>;
}

