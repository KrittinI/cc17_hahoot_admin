import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function StatisticCard() {
  const data = {
    labels: ['User Profile', 'Quiz Store', '???', 'Event list'],
    datasets: [
      {
        data: [50, 50, 50, 50],
        backgroundColor: [
          'rgba(54, 162, 235, 1)', // Blue
          'rgba(255, 99, 132, 1)', // Red
          'rgba(75, 192, 192, 1)', // Green
          'rgba(255, 206, 86, 1)', // Yellow
        ],

        borderWidth: 1,
        cutout: '60%',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          color: '#4B5563',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
      },
    },
  };

  return (
    <div className='bg-white p-8 rounded-3xl h-full'>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default StatisticCard;
