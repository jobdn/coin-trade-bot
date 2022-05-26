import { Col, Row, Typography } from "antd";

import { LoadingOutlined } from "@ant-design/icons";

import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <Row justify="center" align="middle" className={styles.row}>
      <Col className={styles.col}>
        <LoadingOutlined className={styles.spinner} />;
        <Typography.Title level={2} className={styles.undertitle}>
          Page is loading....
        </Typography.Title>
      </Col>
    </Row>
  );
};

export { Spinner };
