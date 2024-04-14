import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const generateFakeData = () => {
    return labels.map(() => faker.datatype.number({ min: 0, max: 1000 }));
  };

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: generateFakeData(),
      backgroundColor: "#31A36C",
    },
    {
      label: "Dataset 2",
      data: generateFakeData(),
      backgroundColor: "#ffffff",
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} />;
}
