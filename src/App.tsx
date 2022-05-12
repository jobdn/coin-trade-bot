import { Layout, Menu } from "antd";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

import "./App.scss";
import { useState } from "react";

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
        <Menu />
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
