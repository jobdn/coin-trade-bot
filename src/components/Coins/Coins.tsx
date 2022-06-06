import React from "react";
import { Col, Row, Typography } from "antd";

import styles from "./Coins.module.scss";
import { useTypedSelector } from "../../hook/redux";
import { Spinner } from "../Spinner";
import { Error } from "../Error";
import { CoinsSearch } from "../CoinsSearch";
import { CoinList } from "../CoinList";

const Coins = () => {
  const { error, isLoading } = useTypedSelector((state) => state.coins);

  if (error) return <Error message={error} savingLink="/" savingTitle="home" />;

  return (
    <>
      <Typography.Title level={2} className={styles["coins-title"]}>
        Coins
      </Typography.Title>
      <Row>
        <Col span={24}>
          <CoinsSearch />
          {isLoading ? <Spinner message="Coins is loading..." /> : <CoinList />}
        </Col>
      </Row>
    </>
  );
};

export { Coins };
