import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/App.scss";
import { AppRouter } from "./components/AppRouter";
import { useAppDispatch } from "./hook/redux";
import {
  authActionCreator,
  MetamaskRequests,
} from "./store/reducers/auth/authActionCreator";

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const reloadLogin = () => navigate(location.pathname, { replace: true });
    dispatch(authActionCreator(MetamaskRequests.ETH_ACCOUNTS, reloadLogin));
  }, []);

  return <AppRouter />;
}

export default App;
