import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "../../hoc/PrivateRouter";
import { privateRoutes, publicRoutes } from "../../routes";
import { AppLayout } from "../Layout";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {publicRoutes.map((route) => (
          // TODO: Should I use such syntax as <route.element />
          <Route
            index={route.index}
            path={route.path}
            key={route.path}
            element={<route.element />}
          />
        ))}
        {privateRoutes.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={
              <PrivateRouter>
                <route.element />
              </PrivateRouter>
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export { AppRouter };
