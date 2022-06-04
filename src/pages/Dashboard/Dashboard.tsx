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
import { Card, Col, Row } from "antd";

import styles from "./Dashboard.module.scss";
import { CurrenciesContainer } from "../../components/CurrenciesContainer";
import { Fee } from "../../components/Fee";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  const [isModile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (document.documentElement.clientWidth < 769) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isModile]);

  return (
    <div className={styles.dashboard}>
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
        <Col span={isModile ? 24 : 12} className={styles.col}>
          <Card bordered={false} className={styles.card}>
            <Fee />
          </Card>
        </Col>
        <Col span={isModile ? 24 : 12} className={styles.col}>
          <Card bordered={false} className={styles.card}>
            <CurrenciesContainer />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export { Dashboard };
