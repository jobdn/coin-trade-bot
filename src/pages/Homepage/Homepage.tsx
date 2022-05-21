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
import { Card, Col, Row } from "antd";

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
          <Card bordered={false} className={styles.card}>
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
                    borderWidth: 3,
                    maxBarThickness: 100,
                    backgroundColor: ["rgba(31, 136, 231, 0.4)"],
                    data: [10, 20, 59, 90, 87, 45, 37, 29, 94, 77, 34, 33, 88],
                  },
                ],
              }}
            />
          </Card>
        </Col>
      </Row>
      <Row className={styles.row} justify="space-between">
        <Col span={12} className={styles.col}>
          <Card bordered={false} className={styles.card}>
            test 1
          </Card>
        </Col>
        <Col span={12} className={styles.col}>
          <Card bordered={false} className={styles.card}>
            test 2
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export { Homepage };
