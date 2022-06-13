export interface IUser {
  id: number;
  username: string;
  name: string;
  role: string | number;
  blacklisted: boolean;
}

export interface IUsersState {
  users: IUser[];
}
