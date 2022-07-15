import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "../../hoc/PrivateRouter";
import { privateRoutes, publicRoutes } from "../../routes";

import { AppLayout } from "../AppLayout";
import { Dashboard } from "../../pages/Dashboard";
import { LoginPage } from "../../pages/LoginPage";
import { User } from "../../pages/User";
import { NotFound } from "../../pages/NotFound";
import { AdminPage } from "../../pages/AdminPage";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
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
              <AdminPage />
            </PrivateRouter>
          }
        />
      </Route>
    </Routes>
  );
};

export { AppRouter };
