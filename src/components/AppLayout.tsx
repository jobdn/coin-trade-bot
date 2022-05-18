import { Layout, Menu, MenuProps } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faUser } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";
import { RouteNames } from "../routes";

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

const AppLayout = () => {
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
        <Header />
        <Layout.Content style={{ backgroundColor: "#1D1B2A" }}>
          <Outlet />
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
