import React from "react";
import styled from "styled-components";

import { useTypedSelector } from "../../hook/redux";
import { UserItem } from "../UserItem";
import { UserListTitle } from "../UserListTitle";

const UserListCointainer = styled.div`
  margin-top: 46px;
  overflow-y: auto;
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

export const UserList: React.FC = () => {
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
