import { Layout, Menu, MenuProps } from "antd";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

import "./App.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faUser } from "@fortawesome/free-solid-svg-icons";

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
  getItem("User Account", 1, <FontAwesomeIcon icon={faUser} />),
  getItem("Statistics", 2, <FontAwesomeIcon icon={faChartSimple} />),
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
        <Layout.Content style={{ backgroundColor: "#1D1B2A" }}></Layout.Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default App;
