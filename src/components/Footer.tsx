import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout, Row } from "antd";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <Layout.Footer style={{ background: "#27273B", color: "#9F9F9F" }}>
      <Row align="middle" justify="center">
        Made with
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: "#C84E4E", margin: "0 5px" }}
        />
        by Metamorphosis
      </Row>
    </Layout.Footer>
  );
};

export default Footer;
