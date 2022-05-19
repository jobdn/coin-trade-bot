import React, { FC } from "react";
import { Chart } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HomePage: FC = () => {
  return (
    <div>
      <Chart
        type="line"
        data={{
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          datasets: [
            {
              label: "Money",
              tension: 0.1,
              borderColor: "white",
              data: [1, 0, 3, 90, 45, 30, 11],
            },
            {
              label: "some",
              tension: 0.1,
              borderColor: "red",
              data: [11, 22, 30, 98, 4, 0, 1],
            },
          ],
        }}
      />
    </div>
  );
};

export default HomePage;
