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
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items = [
  getItem(
    "User Account",
    1,
    <Link to={`/${RouteNames.USER}`}>
      <FontAwesomeIcon icon={faUser} />
    </Link>
  ),
  getItem(
    "Statistics",
    2,
    <Link to={`/${RouteNames.STATISTICS}`}>
      <FontAwesomeIcon icon={faChartSimple} />
    </Link>
  ),
];

const Ellipse = styled.div`
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
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Ellipse />
      <Layout.Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        className={styles.sider}
      >
        <Menu items={items} theme="dark" />
      </Layout.Sider>
      <Layout>
        <Header />
        <Layout.Content className={styles.content}>
          <Outlet />
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export { AppLayout };
