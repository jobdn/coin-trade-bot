import React from "react";
import { Row, Typography } from "antd";
import styles from "./OrderHistory.module.scss";

const OrderHistory = () => {
  console.log(styles);
  return (
    <>
      <Typography.Title level={2} className={styles["order-history-title"]}>
        Order History
      </Typography.Title>
      <Row></Row>
    </>
  );
};

export { OrderHistory };
