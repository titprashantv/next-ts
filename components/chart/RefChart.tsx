import React, {useRef, useEffect} from 'react';
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
            data: [791, 326, 732, -942, -339, -113, -657],
        },
        {
            type: 'bar' as const,
            label: 'Dataset 2',
            backgroundColor: 'rgb(75, 192, 192)',
            data: [204, 440, -364, -856, 9, -846, -128],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'bar' as const,
            label: 'Dataset 3',
            backgroundColor: 'rgb(53, 162, 235)',
            data: [565, -918, -223, -833, -110, 622, -601],
        },
    ],
};

function triggerTooltip(chart: ChartJS | null) {
    const tooltip = chart?.tooltip;

    if (!tooltip) {
        return;
    }

    if (tooltip.getActiveElements().length > 0) {
        tooltip.setActiveElements([], {x: 0, y: 0});
    } else {
        const {chartArea} = chart;

        tooltip.setActiveElements(
            [
                {
                    datasetIndex: 0,
                    index: 2,
                },
                {
                    datasetIndex: 1,
                    index: 2,
                },
            ],
            {
                x: (chartArea.left + chartArea.right) / 2,
                y: (chartArea.top + chartArea.bottom) / 2,
            }
        );
    }

    chart.update();
}

export default function RefChart() {
    const chartRef = useRef<ChartJS>(null);

    useEffect(() => {
        const chart = chartRef.current;

        triggerTooltip(chart);
    }, []);
    console.log(data);
    return <Chart ref={chartRef} type='bar' data={data}/>;
}
