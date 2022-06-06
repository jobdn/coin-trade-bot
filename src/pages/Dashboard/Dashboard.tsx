import React from "react";
import { Card, Col, Row } from "antd";

import styles from "./Dashboard.module.scss";
import { Fee } from "../../components/Fee";
import { Chart } from "../../components/Chart";
import { Coins } from "../../components/Coins";

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
            <Chart />
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
            <Coins />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export { Dashboard };
