import { useLocation, Navigate } from "react-router-dom";
import { RouteNames } from "../routes";

const PrivateRouter = ({ children }: { children: JSX.Element }) => {
  const auth = true;
  const location = useLocation();
  console.log(location);

  if (!auth) {
    return (
      <Navigate to={RouteNames.LOGIN} state={{ from: location }} replace />
    );
  }

  return children;
};

export default PrivateRouter;
