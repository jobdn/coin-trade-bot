import { Row, Col, Typography, Skeleton } from "antd";
import React from "react";

import styles from "./Fee.module.scss";

export const Fee: React.FC = () => {
  return (
    <>
      <Typography.Title level={2} className={styles["fee-title"]}>
        Fee Collected
      </Typography.Title>
      <Row>
        <Col span={24}>
          <Skeleton active paragraph={{ rows: 6 }} />
        </Col>
      </Row>
    </>
  );
};
