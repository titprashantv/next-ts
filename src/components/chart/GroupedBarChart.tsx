import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
        },
    },
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [-170, 13, -143, -965, -602, 758, -931],
            backgroundColor: 'rgb(255, 99, 132)',
            stack: 'Stack 0',
        },
        {
            label: 'Dataset 2',
            data: [-633, -838, 10, -691, -842, 244, -246],
            backgroundColor: 'rgb(75, 192, 192)',
            stack: 'Stack 0',
        },
        {
            label: 'Dataset 3',
            data: [902, -90, 879, 551, 573, -938, -159],
            backgroundColor: 'rgb(53, 162, 235)',
            stack: 'Stack 1',
        },
    ],
};

export default function GroupedBarChart() {
    return <Bar options={options} data={data}/>;
}
