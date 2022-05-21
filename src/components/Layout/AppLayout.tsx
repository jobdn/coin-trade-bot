import { Layout, Menu, MenuProps } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { Header } from "../Header/";
import { Footer } from "../Footer/";
import { RouteNames } from "../../routes";

import styles from "./AppLayout.module.scss";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
  } as MenuItem;
}

const items = [
  getItem(
    1,
    <Link to={`/${RouteNames.USER}`}>
      <FontAwesomeIcon icon={faUser} />
    </Link>
  ),
  getItem(
    2,
    <Link to={`/${RouteNames.STATISTICS}`}>
      <FontAwesomeIcon icon={faChartSimple} />
    </Link>
  ),
];

const EllipseBg = styled.div`
  position: fixed;
  bottom: 0;
  transform: translateY(50%);
  border-radius: 100%;
  background: #670097;
  width: 100vw;
  height: 20%;
  filter: blur(350px);
  pointer-events: none;
`;

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <EllipseBg />
      <Header />
      <Layout>
        <Layout.Sider
          width={111}
          breakpoint="sm"
          collapsedWidth="0"
          className={styles.sider}
        >
          <Menu
            items={items}
            theme="dark"
            style={{ background: "inherit", paddingTop: "50px" }}
          />
        </Layout.Sider>
        <Layout.Content className={styles.content}>
          <Outlet />
        </Layout.Content>
      </Layout>
      <Footer />
    </Layout>
  );
};

export { AppLayout };
