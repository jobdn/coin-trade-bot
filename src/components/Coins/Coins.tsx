import React from "react";
import { Col, Image, Input, Row, Typography } from "antd";

import styles from "./Coins.module.scss";
import { useAppDispatch, useTypedSelector } from "../../hook/redux";
import { Spinner } from "../Spinner";
import { Error } from "../Error";
import { ICoin } from "../../models/CoinsState";
import { startFetchCoins } from "../../store/reducers/coins";
import { fetchCoins } from "../../store/reducers/coins/fetchCoins";

const Coins = () => {
  const { error, isLoading } = useTypedSelector((state) => state.coins);

  if (error) return <Error message={error} savingLink="/" savingTitle="home" />;

  return (
    <>
      <Typography.Title level={2} className={styles["coins-title"]}>
        Coins
      </Typography.Title>
      <Row>
        <CoinsSearch />
        {isLoading ? <Spinner /> : <CoinsList />}
      </Row>
    </>
  );
};

const CoinsSearch: React.FC = () => {
  const dispatch = useAppDispatch();
  const { search } = useTypedSelector((state) => state.coins);

  // TODO: Don't make request on space or empty string
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch(startFetchCoins(event.target.value));
  };

  React.useEffect(() => {
    dispatch(fetchCoins(search));
  }, [search, dispatch]);

  return (
    <Input
      value={search}
      onChange={handleInputChange}
      placeholder="Search coin"
    />
  );
};

const CoinsList: React.FC = () => {
  const { coins } = useTypedSelector((state) => state.coins);
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
          {coins.map((coin) => (
            <CoinItem {...coin} key={coin.id} />
          ))}
        </>
      ) : (
        <h1 style={{ color: "#fff" }}>There is not such tokens</h1>
      )}
    </div>
  );
};

const CoinItem: React.FC<ICoin> = ({
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

export { Coins };
