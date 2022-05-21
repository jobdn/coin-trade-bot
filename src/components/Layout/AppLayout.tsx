import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Header } from "../Header/";
import { Footer } from "../Footer/";

import styles from "./AppLayout.module.scss";
import { FC } from "react";
import { Sidebar } from "../Sidebar";

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

const AppLayout: FC = () => {
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
