import { Admin } from "./components/Admin";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Proposals } from "./pages/Proposals";
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
  ADMIN = "/admin",
  STATISTICS = "/statictics",
  PROPOSALS = "/proposals",
  NOT_FOUND = "*",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.DASHBOARD, index: true, element: Dashboard },
  { path: RouteNames.LOGIN, element: Login },
  { path: RouteNames.NOT_FOUND, element: NotFound },
  { path: RouteNames.PROPOSALS, element: Proposals },
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
  {
    path: RouteNames.ADMIN,
    element: Admin,
  },
];
