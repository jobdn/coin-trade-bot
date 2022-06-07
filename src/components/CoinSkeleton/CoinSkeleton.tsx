import { Col, Row, Skeleton } from "antd";
import React from "react";

export const CoinSkeleton: React.FC<{ key: string }> = ({ key }) => {
  return (
    <Row key={key} style={{ padding: "5px 10px" }} gutter={24}>
      <Col span={4}>
        <Skeleton.Avatar active />
      </Col>
      <Col span={4} style={{ overflow: "hidden" }}>
        <Skeleton.Button active block />
      </Col>
      <Col span={8} style={{ overflow: "hidden" }}>
        <Skeleton.Button active block />
      </Col>
      <Col span={8} style={{ overflow: "hidden" }}>
        <Skeleton.Button active block />
      </Col>
    </Row>
  );
};
