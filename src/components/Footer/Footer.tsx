import { FC } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout, Row } from "antd";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <Layout.Footer className={styles.footer}>
      <Row align="middle" justify="center">
        Made with
        <FontAwesomeIcon icon={faHeart} className={styles.icon} />
        by Metamorphosis
      </Row>
    </Layout.Footer>
  );
};

export { Footer };
