import React, { FC } from "react";
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
import { Col, Row } from "antd";

import styles from "./Homepage.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Homepage: FC = () => {
  return (
    <div className={styles.homepage}>
      <Row className={styles.row}>
        <Col span={24} className={styles.col}>
          <Bar
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
                  backgroundColor: ["rgba(31, 136, 231, 0.4)"],
                  data: [10, 20, 59, 90, 87, 45, 37, 29, 94, 77, 34, 33, 88],
                },
              ],
            }}
          />
        </Col>
      </Row>
      <Row className={styles.row}>
        <Col span={12} className={styles.col}></Col>
        <Col span={12} className={styles.col}>
          list
        </Col>
      </Row>
    </div>
  );
};

export { Homepage };
