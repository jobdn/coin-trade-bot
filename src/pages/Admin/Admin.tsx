import React from "react";
import { Col, Row } from "antd";

import styles from "./Admin.module.scss";

import { UserList } from "../../components/UserList/UserList";

export const Admin: React.FC = () => {
  return (
    <Row justify="center" align="middle" className={styles.admin}>
      <Col>
        <UserList />
      </Col>
    </Row>
  );
};
