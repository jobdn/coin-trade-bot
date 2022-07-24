import React from "react";
import millify from "millify";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

import { useGetCtyptosQuery } from "../../services/cryptosApi";
import { Spinner } from "../Spinner";

import styles from "./Cryptocurrencies.module.scss";

export const Cryptocurrencies: React.FC<{
  simplified?: boolean;
}> = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { isFetching, data: cryptosList } = useGetCtyptosQuery(count);

  const [currencies, setCurrencies] = React.useState(cryptosList?.data.coins);

  React.useEffect(() => {
    setCurrencies(cryptosList?.data.coins);
  }, [cryptosList]);

  if (isFetching) return <Spinner message="coins is loading..." />;

  return (
    <Row
      className={styles.cryptocurrencies}
      gutter={[
        { xs: 0, sm: 16 },
        { xs: 8, sm: 16, md: 24, lg: 32 },
      ]}
    >
      {currencies?.map((currency) => (
        <Col xs={24} sm={12} lg={6}>
          <Link to={`/currency/${currency.uuid}`}>
            <Card
              hoverable
              title={`${currency.rank}. ${currency.name}`}
              extra={
                <img
                  style={{ width: "30px" }}
                  src={currency.iconUrl}
                  alt={currency.name}
                ></img>
              }
              className={styles.currencyCard}
            >
              <p>Price: ${millify(currency.price)}</p>
              <p>Market Cap: ${millify(currency.marketCap)}</p>
              <p>Daily change: {millify(currency.change)}%</p>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};
