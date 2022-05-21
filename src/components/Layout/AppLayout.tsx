import { Layout, Menu, MenuProps } from "antd";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { Header } from "../Header/";
import { Footer } from "../Footer/";
import { RouteNames } from "../../routes";

import styles from "./AppLayout.module.scss";
import { FC } from "react";

// TODO: What is it?
type MenuItem = Required<MenuProps>["items"][number];

const { Sider } = Layout;

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
    <Link to={`/${RouteNames.USER}`} className={styles.link}>
      <FontAwesomeIcon icon={faUser} className={styles.icon} />
    </Link>
  ),
  getItem(
    2,
    <Link to={`/${RouteNames.STATISTICS}`} className={styles.link}>
      <FontAwesomeIcon icon={faChartSimple} className={styles.icon} />
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

const Sidebar: FC = () => {
  return (
    <Sider
      width={111}
      breakpoint="sm"
      collapsedWidth="0"
      className={styles.sider}
    >
      <Menu
        items={items}
        theme="dark"
        className={styles.menu}
        selectable={false}
      />
    </Sider>
  );
};

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <EllipseBg />
      <Header />
      <Layout>
        <Sidebar />
        <Layout.Content className={styles.content}>
          <Outlet />
        </Layout.Content>
      </Layout>
      <Footer />
    </Layout>
  );
};

export { AppLayout };
