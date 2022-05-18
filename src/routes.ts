import NotFound from "./pages/NotFound";
import Statistics from "./pages/Statistics";
import User from "./pages/User";

export interface IRoute {
  path: string;
  index?: boolean;
  // TODO: What is ComponentType
  element: React.ComponentType;
}

export enum RouteNames {
  // TODO: I need to do homepage
  USER = "user",
  STATISTICS = "statictics",
  NOT_FOUND = "*",
}

export const routes: IRoute[] = [
  {
    path: RouteNames.USER,
    element: User,
  },
  {
    path: RouteNames.STATISTICS,
    element: Statistics,
  },
  {
    path: RouteNames.NOT_FOUND,
    element: NotFound,
  },
];