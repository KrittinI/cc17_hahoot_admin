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

export default function BarChart({ serverData, serverLabels = ['Users', 'Questions', 'Events', 'Rooms'] }) {
  const data = {
    labels: serverLabels,
    datasets: [
      {
        // label: 'Users',
        data: serverData,
        backgroundColor: [
          '#60A5FA', // Blue
          '#4ADE80', // Green
          '#FB7185', // Red
          '#FFDA45', // Yellow

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
