import { Layout, Menu, MenuProps } from "antd";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faUser } from "@fortawesome/free-solid-svg-icons";

import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import User from "./pages/User";
import Statistics from "./pages/Statistics";

import "./App.scss";

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
    <Link to="/user">
      <FontAwesomeIcon icon={faUser} />
    </Link>
  ),
  getItem(
    "Statistics",
    2,
    <Link to="/statictics">
      <FontAwesomeIcon icon={faChartSimple} />
    </Link>
  ),
];

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{ background: "#27273B", color: "#9F9F9F" }}
      >
        <Menu items={items} theme="dark" />
      </Layout.Sider>
      <Layout>
        <AppHeader />
        <Layout.Content style={{ backgroundColor: "#1D1B2A" }}>
          <Outlet />
        </Layout.Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default App;
