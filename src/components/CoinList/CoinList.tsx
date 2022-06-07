import React from "react";
import { Col, Row } from "antd";

import { CoinItem } from "../CoinItem";

import { useTypedSelector } from "../../hook/redux";

import styles from "./CoinList.module.scss";
import { CoinSkeleton } from "../CoinSkeleton";

export const CoinList: React.FC = () => {
  const { coins, isLoading } = useTypedSelector((state) => state.coins);
  return (
    <div className={styles["coin-list"]}>
      {coins.length > 0 ? (
        <>
          <Row className={styles["coin-list-title"]}>
            <Col span={4}>Img</Col>
            <Col span={4}>Sym</Col>
            <Col span={8}>Name</Col>
            <Col span={8}>Price usd</Col>
          </Row>
          {coins.map((coin) => {
            return isLoading ? (
              <CoinSkeleton key={coin.id} />
            ) : (
              <CoinItem {...coin} key={coin.id} />
            );
          })}
        </>
      ) : (
        <div className={styles["not-found"]}>
          <p>There is not such tokens</p>
        </div>
      )}
    </div>
  );
};
