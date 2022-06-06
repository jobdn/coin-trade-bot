import React from "react";
import { Col, Image, Row } from "antd";

import { ICoin } from "../../models/CoinsState";
import styles from "./CoinItem.module.scss";

export const CoinItem: React.FC<ICoin> = ({
  image,
  id,
  name,
  symbol,
  current_price,
}) => {
  return (
    <Row className={styles["coin-item"]}>
      <Col span={4} className={styles["coin-item-col"]}>
        <Image alt={id} src={image} width="30px" preview={false} />
      </Col>
      <Col span={4} className={styles["coin-item-col"]}>
        {symbol.toUpperCase()}
      </Col>
      <Col span={8} className={styles["coin-item-col"]}>
        {name}
      </Col>
      <Col span={8} className={styles["coin-item-col"]}>
        {current_price}
      </Col>
    </Row>
  );
};
