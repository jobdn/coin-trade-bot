import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart: React.FC = () => {
  const [gradient, setGradient] = React.useState<CanvasGradient>();

  React.useEffect(() => {
    const setBarBg = () => {
      const ctx = (
        document.getElementById("bar") as HTMLCanvasElement
      ).getContext("2d");

      const gradient = ctx?.createLinearGradient(0, 250, 20, 0);
      gradient?.addColorStop(0, "rgba(31, 142, 241, 0)");
      gradient?.addColorStop(1, "rgba(31, 136, 231, 0.4)");
      setGradient(gradient);
    };
    setBarBg();
  }, []);

  return (
    <Bar
      id="bar"
      options={{ maintainAspectRatio: false }}
      data={{
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Ost",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Years trades",
            borderColor: ["rgba(31, 142, 241, 1)"],
            borderWidth: 2,
            maxBarThickness: 100,
            backgroundColor: gradient,
            data: [10, 20, 59, 90, 87, 45, 37, 29, 94, 77, 34, 33, 88],
          },
        ],
      }}
    />
  );
};

export { Chart };
