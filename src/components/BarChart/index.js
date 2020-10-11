import React from 'react';
import { Bar } from 'react-chartjs-2'

const BarChart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Donations for 2020 (K)',
                data: [14, 12, 11, 10, 10, 13]
            }
        ]

    }

    return (
        <Bar data={data} />
    )
}

export default BarChart;