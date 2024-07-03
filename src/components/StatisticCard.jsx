import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function StatisticCard() {
  const data = {
    labels: ['Users', 'Events', 'Questions', 'Rooms'],
    datasets: [
      {
        data: [450, 350, 400, 200],
        backgroundColor: [
          '#60A5FA', // Blue
          '#FFDA45', // Yellow
          '#FB7185', // Red
          '#4ADE80', // Green
        ],

        borderWidth: 1,
        cutout: '60%',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom', // Position of Data Chart
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
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}

export default StatisticCard;
