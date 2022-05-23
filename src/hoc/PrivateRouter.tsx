import { useLocation, Navigate } from "react-router-dom";
import { useTypedSelector } from "../hook/redux";
import { RouteNames } from "../routes";

const PrivateRouter = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const location = useLocation();
  const state = { from: location };

  if (!isAuth) {
    return <Navigate to={RouteNames.LOGIN} state={state} replace />;
  }

  return children;
};

export default PrivateRouter;
