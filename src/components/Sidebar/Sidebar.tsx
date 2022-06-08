import {
  faChartSimple,
  faUser,
  faUserPlus,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout, Menu, MenuProps } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { RouteNames } from "../../routes";

import styles from "./Sidebar.module.scss";

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
    <Link to={RouteNames.USER} className={styles.link}>
      <FontAwesomeIcon icon={faUser} className={styles.icon} />
    </Link>
  ),
  getItem(
    2,
    <Link to={RouteNames.STATISTICS} className={styles.link}>
      <FontAwesomeIcon icon={faChartSimple} className={styles.icon} />
    </Link>
  ),
  getItem(
    3,
    <Link to={RouteNames.ADMIN} className={styles.link}>
      <FontAwesomeIcon icon={faUserPlus} className={styles.admin} />
    </Link>
  ),
  getItem(
    4,
    <Link to={RouteNames.PROPOSALS} className={styles.link}>
      <FontAwesomeIcon icon={faClipboardList} className={styles.icon} />
    </Link>
  ),
];

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
        className={styles["sider-menu"]}
        selectable={false}
      />
    </Sider>
  );
};

export { Sidebar };
