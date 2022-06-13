import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";

const StyledUserListTitle = styled(Row)`
  margin-top: 50px;

  @media screen and (max-width: 1123px) {
    font-size: 14px;
  }
`;

export const UserListTitle: React.FC = () => {
  return (
    <StyledUserListTitle gutter={24}>
      <Col span={3}></Col>
      <Col span={5}>ID</Col>
      <Col span={5}>Telegram</Col>
      <Col span={5}>Nickname</Col>
      <Col span={4}>Status</Col>
      <Col span={2}></Col>
    </StyledUserListTitle>
  );
};
