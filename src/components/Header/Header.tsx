import { Layout } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <Layout.Header className={styles.header}>
      <Link to={RouteNames.DASHBOARD} className={styles.title}>
        Coin Trade Bot
      </Link>
    </Layout.Header>
  );
};

export { Header };
