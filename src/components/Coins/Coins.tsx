import React from "react";
import { Col, Row, Typography } from "antd";

import styles from "./Coins.module.scss";
import { useTypedSelector } from "../../hook/redux";
import { Error } from "../Error";
import { CoinsSearch } from "../CoinsSearch";
import { CoinList } from "../CoinList";

const Coins: React.FC = () => {
  const { error } = useTypedSelector((state) => state.coins);

  if (error) return <Error message={error} savingLink="/" savingTitle="home" />;

  return (
    <>
      <Typography.Title level={2} className={styles.coinsTitle}>
        Coins
      </Typography.Title>
      <Row>
        <Col span={24}>
          <CoinsSearch />
          <CoinList />
        </Col>
      </Row>
    </>
  );
};

export { Coins };
