import React from "react";
import { Col, Input, Row } from "antd";
import styled from "styled-components";
import { useAppDispatch } from "../../hook/redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faUser } from "@fortawesome/free-solid-svg-icons";

import { IUser } from "../../models/UsersState";
import { deleteUser, setUserStatus } from "../../store/reducers/users";

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
  border: none;

  @media screen and (max-width: 636px) {
    font-size: 10px !important;
  }

  @media screen and (max-width: 1123px) {
    font-size: 14px;
  }
`;

export const UserItem: React.FC<IUser> = React.memo(
  ({ id, name, username, blacklisted, role }) => {
    const dispatch = useAppDispatch();
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
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </StyledUserCol>
        <StyledUserCol span={2} onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashCan} />
        </StyledUserCol>
      </StyledUserItem>
    );
  }
);
