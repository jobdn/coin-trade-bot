import React from "react";
import { Col, Row, Typography } from "antd";

import { LoadingOutlined } from "@ant-design/icons";

import styles from "./Spinner.module.scss";

const Spinner: React.FC<{ message: string }> = ({ message }) => {
  return (
    <Row justify="center" align="middle" className={styles.row}>
      <Col className={styles.col}>
        <LoadingOutlined className={styles.spinner} />;
        <Typography.Title level={2} className={styles.underTitle}>
          {message}
        </Typography.Title>
      </Col>
    </Row>
  );
};

export { Spinner };
