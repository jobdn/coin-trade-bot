import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "../../hoc/PrivateRouter";
import { privateRoutes, publicRoutes } from "../../routes";

import { AppLayout } from "../AppLayout";
import { Dashboard } from "../../pages/Dashboard";
import { Login } from "../../pages/Login";
import { User } from "../../pages/User";
import { NotFound } from "../../pages/NotFound";
import { Admin } from "../../pages/Admin";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        {/* Private routes */}
        <Route
          path="user"
          element={
            <PrivateRouter>
              <User />
            </PrivateRouter>
          }
        />
        <Route
          path="admin"
          element={
            <PrivateRouter>
              <Admin />
            </PrivateRouter>
          }
        />
      </Route>
    </Routes>
  );
};

export { AppRouter };
