import { FC } from "react";
import { Col, Row, Typography } from "antd";

import styles from "./Error.module.scss";
import { Link } from "react-router-dom";

interface IErrorProps {
  message: string;
  savingTitle: string;
  savingLink: string;
}

const Error: FC<IErrorProps> = ({ message, savingLink, savingTitle }) => {
  return (
    <Row justify="center" align="middle" className={styles.error}>
      <Col>
        <Typography.Title type="danger" level={2} className={styles.title}>
          {message}.
        </Typography.Title>
        <Typography.Text className={styles.text}>
          Go to the <Link to={savingLink}>{savingTitle}...</Link>
        </Typography.Text>
      </Col>
    </Row>
  );
};

export { Error };
