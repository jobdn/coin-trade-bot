import { Row, Typography } from "antd";
import React from "react";

import styles from "./Fee.module.scss";

const Fee: React.FC = () => {
  return (
    <>
      <Typography.Title level={2} className={styles["fee-title"]}>
        Fee Collected
      </Typography.Title>
      <Row></Row>
    </>
  );
};

export { Fee };
