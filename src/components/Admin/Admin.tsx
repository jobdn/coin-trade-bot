import React from "react";
import { Col, Row } from "antd";
import styles from "./Admin.module.scss";

export const Admin: React.FC = () => {
  return (
    <Row justify="center" align="middle" className={styles.admin}>
      <Col>This page is in development now :)</Col>
    </Row>
  );
};
