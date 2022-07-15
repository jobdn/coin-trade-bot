import React from "react";
import { Col, Row } from "antd";

import styles from "./AdminPage.module.scss";

import { UserList } from "../../components/UserList/UserList";

export const AdminPage: React.FC = () => {
  return (
    <Row justify="center" align="middle" className={styles.admin}>
      <Col>
        <UserList />
      </Col>
    </Row>
  );
};
