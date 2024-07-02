import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ActivityCard() {
  const data = {
    labels: ['User', 'Event list', 'Quiz store', '???'],
    datasets: [
      {
        // label: 'Total Activity',
        data: [450, 300, 200, 400],
        backgroundColor: [
          'rgba(54, 162, 235, 1)', // Blue
          'rgba(255, 206, 86, 1)', // Yellow
          'rgba(255, 99, 132, 1)', // Red
          'rgba(75, 192, 192, 1)', // Green
        ],
        borderRadius: 20,
        barThickness: 40,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        color: 'rgba(200, 200, 200, 0.5)',
      },
      x: {
        grid: {
          color: 'rgba(200, 200, 200, 0)',
        },
      },
    },
  };

  return (
    <div>
      <Bar
        data={data}
        options={options}
        className='bg-white p-8 rounded-3xl h-full'
      />
    </div>
  );
}
