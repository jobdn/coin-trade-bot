import React from "react";
import { Card, Col, Row, Typography } from "antd";

import { Chart } from "../../components/Chart";
import { Link } from "react-router-dom";
import { Cryptocurrencies } from "../../components/Cryptocurrencies";
// import { Coins } from "../../components/Coins";
// import { Fee } from "../../components/Fee";

import styles from "./Dashboard.module.scss";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      {/* <Row className={styles.row}>
        <Col span={24} className={styles.col}>
          <Card bordered={false} className={styles.card}>
            <Chart />
          </Card>
        </Col>
      </Row> */}
      {/* <Row className={styles.row} gutter={16} justify="space-between">
        <Col sm={24} lg={12} className={styles.col}>
          <Card bordered={false} className={styles.card}>
            <Fee />
          </Card>
        </Col>

        <Col sm={24} lg={12} className={styles.col}>
          <Card bordered={false} className={styles.card}>
            <Coins />
          </Card>
        </Col>
      </Row> */}
      <div className={styles.dashboardHeadingContainer}>
        <Typography.Title level={2} className={styles.headingTitle}>
          Top 10 Cryptocurrencies in the world
        </Typography.Title>
        <Typography.Title level={2} className={styles.showMore}>
          <Link to="/cryptocurrencies">Show more</Link>
        </Typography.Title>
      </div>
      <Cryptocurrencies simplified />
    </div>
  );
};

export { Dashboard };
