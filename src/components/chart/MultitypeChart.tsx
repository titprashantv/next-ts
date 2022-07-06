import React from 'react';
import {Chart as ChartJS, LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip} from 'chart.js';
import {Chart} from 'react-chartjs-2';

ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            type: 'line' as const,
            label: 'Dataset 1',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
            data: [198, 881, -325, 650, -423, -730, -615],
        },
        {
            type: 'bar' as const,
            label: 'Dataset 2',
            backgroundColor: 'rgb(75, 192, 192)',
            data: [520, 281, 230, 201, 840, -834, 811],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'bar' as const,
            label: 'Dataset 3',
            backgroundColor: 'rgb(53, 162, 235)',
            data: [401, -808, 214, -553, 605, 932, 713],
        },
    ],
};

export default function MultitypeChart() {
    return <Chart type='bar' data={data}/>;
}
