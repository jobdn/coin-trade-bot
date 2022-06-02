import React from "react";
import { Row, Typography } from "antd";

import axios, { AxiosResponse } from "axios";

import styles from "./OrderHistory.module.scss";

interface ITrending {
  coins: ICoin[];
}

interface ICoin {
  item: ICoinItem;
}

interface ICoinItem {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
}

const OrderHistory = () => {
  React.useEffect(() => {}, []);

  return (
    <>
      <Typography.Title level={2} className={styles["order-history-title"]}>
        Order History
      </Typography.Title>
      <Row></Row>
    </>
  );
};

export { OrderHistory };
