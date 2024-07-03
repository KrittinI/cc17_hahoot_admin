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

export default function BarChart() {
  const data = {
    labels: ['Users', 'Events', 'Questions', 'Rooms'],
    datasets: [
      {
        label: 'Users',
        data: [450, 350, 400, 200],
        backgroundColor: [
          '#60A5FA', // Blue
          '#FFDA45', // Yellow
          '#FB7185', // Red
          '#4ADE80', // Green
        ],
        borderRadius: 20,
        barThickness: 40,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
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

  return <Bar data={data} options={options} />;
}
