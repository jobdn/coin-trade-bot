import { Button, Col, Row, Typography } from "antd";
import { FC } from "react";
import styles from "./Login.module.scss";

const Login: FC = () => {
  return (
    <Row justify="center" className={styles.loginRow}>
      <Col>
        <Typography.Text className={styles.subTitle}>Dashboard</Typography.Text>
        <Typography.Text className={styles.title}>
          Coin Trade Bot
        </Typography.Text>
        <Button className={styles.connectWallet} block>
          Connect Wallet
        </Button>
      </Col>
    </Row>
  );
};

export { Login };
