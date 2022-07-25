import { Row } from "antd";
import { FC } from "react";

const User: FC = () => {
  return (
    <Row
      style={{
        color: "white",
        fontSize: "64px",
        textAlign: "center",
        height: "100%",
      }}
      justify="center"
      align="middle"
    >
      User Page
    </Row>
  );
};

export { User };
