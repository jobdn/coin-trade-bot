import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Statistics } from "./pages/Statistics";
import { User } from "./pages/User";

export interface IRoute {
  path: string;
  index?: boolean;
  // TODO: What is ComponentType
  element: React.ComponentType;
}

export enum RouteNames {
  LOGIN = "/login",
  DASHBOARD = "/",
  USER = "/user",
  USER_PLUS = "/user-plus",
  STATISTICS = "/statictics",
  NOT_FOUND = "*",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.DASHBOARD, element: Dashboard },
  { path: RouteNames.LOGIN, index: true, element: Login },
  { path: RouteNames.NOT_FOUND, element: NotFound },
];

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.USER,
    element: User,
  },
  {
    path: RouteNames.STATISTICS,
    element: Statistics,
  },
];
