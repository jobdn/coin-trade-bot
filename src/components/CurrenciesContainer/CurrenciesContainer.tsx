import React from "react";
import { Col, Image, Input, Row, Typography } from "antd";

import styles from "./CurrenciesContainer.module.scss";
import { useAppDispatch, useTypedSelector } from "../../hook/redux";
import { currenciesActionCreator } from "../../store/reducers/currencies/currenciesActionCreator";
import { Spinner } from "../Spinner";
import { Error } from "../Error";
import { ICurrency } from "../../models/CurrenciesState";

const CurrenciesContainer = () => {
  const { currencies, error, isLoading } = useTypedSelector(
    (state) => state.currencies
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(currenciesActionCreator());
  }, []);

  if (error) return <Error message={error} savingLink="/" savingTitle="home" />;

  return (
    <>
      <Typography.Title
        level={2}
        className={styles["currency-container-title"]}
      >
        Cyrrencies
      </Typography.Title>
      <Row>
        <Input.Search
          placeholder="Search currency"
          allowClear
          enterButton
          onSearch={(value: string) => console.log(value)}
        />
        {isLoading ? <Spinner /> : <CurrenciesList currencies={currencies} />}
      </Row>
    </>
  );
};

const CurrenciesList: React.FC<{
  currencies: ICurrency[];
}> = ({ currencies }) => {
  return (
    <div className={styles["currency-list"]}>
      {currencies.map((currency) => (
        <CurrencyItem {...currency} key={currency.id} />
      ))}
    </div>
  );
};

const CurrencyItem: React.FC<ICurrency> = ({
  image,
  id,
  name,
  symbol,
  current_price,
}) => {
  return (
    <Row className={styles["currency-item"]}>
      <Col span={4} className={styles["currency-item-col"]}>
        <Image alt={id} src={image} width="30px" preview={false} />
      </Col>
      <Col span={4} className={styles["currency-item-col"]}>
        {symbol.toUpperCase()}
      </Col>
      <Col span={8} className={styles["currency-item-col"]}>
        {name}
      </Col>
      <Col span={8} className={styles["currency-item-col"]}>
        {current_price}
      </Col>
    </Row>
  );
};

export { CurrenciesContainer };
