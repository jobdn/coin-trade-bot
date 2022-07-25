import { Col, Layout, Row } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hook/redux";
import { RouteNames } from "../../routes";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const { user } = useTypedSelector((state) => state.auth);

  const formatAddress = () => user.slice(0, 6) + "..." + user.slice(-4);

  return (
    <Layout.Header className={styles.header}>
      <Row justify="space-between">
        <Col>
          <Link to={RouteNames.DASHBOARD} className={styles.title}>
            Coin Trade Bot
          </Link>
        </Col>
        <Col className={styles.address}>{user && formatAddress()}</Col>
      </Row>
    </Layout.Header>
  );
};

export { Header };
