import {
  faChartSimple,
  faUser,
  faUserPlus,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout, Menu, MenuProps } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hook/redux";
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

const userItems = [
  getItem(
    1,
    <Link to={RouteNames.USER} className={styles.link}>
      <FontAwesomeIcon icon={faUser} className={styles.icon} />
    </Link>
  ),
  // TODO: Add this menu items when its functionality will be completed
  // getItem(
  //   2,
  //   <Link to={RouteNames.STATISTICS} className={styles.link}>
  //     <FontAwesomeIcon icon={faChartSimple} className={styles.icon} />
  //   </Link>
  // ),
  // getItem(
  //   4,
  //   <Link to={RouteNames.PROPOSALS} className={styles.link}>
  //     <FontAwesomeIcon icon={faClipboardList} className={styles.icon} />
  //   </Link>
  // ),
];

const adminItems = [
  getItem(
    3,
    <Link to={RouteNames.ADMIN} className={styles.link}>
      <FontAwesomeIcon icon={faUserPlus} className={styles.admin} />
    </Link>
  ),
];

const Sidebar: React.FC = () => {
  const itemsRef = React.useRef<MenuItem[]>(userItems);
  const { isAdmin } = useTypedSelector((state) => state.auth);

  React.useEffect(() => {
    itemsRef.current = isAdmin ? [...userItems, ...adminItems] : userItems;
  }, [isAdmin]);

  return (
    <Sider
      width={90}
      breakpoint="xs"
      collapsedWidth="0"
      className={styles.sider}
    >
      <Menu
        items={itemsRef.current}
        theme="dark"
        className={styles.siderMenu}
        selectable={false}
      />
    </Sider>
  );
};

export { Sidebar };
