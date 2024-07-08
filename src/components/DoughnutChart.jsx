import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ amount, lables }) {
  const data = {
    labels: lables,
    datasets: [
      {
        data: amount,
        backgroundColor: [
          "#4ADE80", // Green
          "#FB7185", // Red
          "#FFDA45", // Yellow
          "#60A5FA", // Blue
          "#FDA1E9", // Pink
          "#718EBF", // Grey
          "#FFA600", // Orange
          "#c934eb", // Purple
          "#34ebd8", // Skyblue
          "#8F6C2C", // Brown
        ],

        borderWidth: 1,
        cutout: "60%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom", // Position of Data Chart
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#4B5563",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}

export default DoughnutChart;
