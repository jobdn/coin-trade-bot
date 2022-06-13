import React from "react";
import { Col, Input, Row } from "antd";
import styles from "./Admin.module.scss";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faUser } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useTypedSelector } from "../../hook/redux";
import { IUser } from "../../models/IUser";
import { deleteUser, setUserStatus } from "../../store/reducers/users";

export const Admin: React.FC = () => {
  return (
    <Row justify="center" align="middle" className={styles.admin}>
      <Col>
        <UserList />
      </Col>
    </Row>
  );
};

const StyledUserListTitle = styled(Row)`
  margin-top: 50px;

  @media screen and (max-width: 1123px) {
    font-size: 14px;
  }
`;

const UserListTitle: React.FC = () => {
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

const UserListCointainer = styled.div`
  margin-top: 46px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 650px;
`;

const StyledUserList = styled.div`
  @media screen and (min-width: 636px) {
    width: 500px;
  }
  @media screen and (min-width: 768px) {
    width: 600px;
  }
  @media screen and (min-width: 1124px) {
    width: 1024px;
  }
`;

const UserList = () => {
  const { users } = useTypedSelector((state) => state.users);
  return (
    <StyledUserList>
      <UserListTitle />
      <UserListCointainer>
        {users.map((user) => (
          <UserItem {...user} key={user.id} />
        ))}
      </UserListCointainer>
    </StyledUserList>
  );
};

const StyledUserItem = styled(Row)`
  background: #27273b;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  margin-top: 13px;
  padding: 10px 0;
`;

const StyledUserCol = styled(Col)`
  font-size: 24px;
  &:first-child {
    text-align: center;
  }
  &:last-child {
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      color: red;
    }
  }
  @media screen and (max-width: 636px) {
    font-size: 10px !important;
  }

  @media screen and (max-width: 1123px) {
    font-size: 14px;
  }
`;

const StyledInput = styled(Input)`
  background-color: #27273b;
  color: white;
  font-size: 24px;
  padding: 0;

  @media screen and (max-width: 636px) {
    font-size: 10px !important;
  }

  @media screen and (max-width: 1123px) {
    font-size: 14px;
  }
`;

const UserItem: React.FC<IUser> = ({
  id,
  name,
  username,
  blacklisted,
  role,
}) => {
  const dispatch = useAppDispatch();
  // TODO: change it when the userJSON will be correct
  const [inputValue, setInputValue] = React.useState<string>(role as string);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    dispatch(setUserStatus({ id, newStatus: inputValue }));
  };

  const handleDelete = () => {
    dispatch(deleteUser(id));
  };

  return (
    <StyledUserItem gutter={8} align="middle">
      <StyledUserCol span={3}>
        <FontAwesomeIcon icon={faUser} />
      </StyledUserCol>
      <StyledUserCol span={5}>{id}</StyledUserCol>
      <StyledUserCol span={5}>
        {username.length > 11 ? username.slice(0, 9) + "..." : username}
      </StyledUserCol>
      <StyledUserCol span={5}>
        {name.length > 11 ? name.slice(0, 8) + "..." : name}
      </StyledUserCol>
      <StyledUserCol span={4}>
        <StyledInput
          value={inputValue}
          style={{ backgroundColor: "#27273b", color: "white" }}
          bordered={false}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </StyledUserCol>
      <StyledUserCol span={2} onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrashCan} />
      </StyledUserCol>
    </StyledUserItem>
  );
};
