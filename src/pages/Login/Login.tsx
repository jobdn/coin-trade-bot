import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Row, Typography } from "antd";

import { useAppDispatch, useTypedSelector } from "../../hook/redux";
import {
  authActionCreator,
  MetamaskRequests,
} from "../../store/reducers/auth/authActionCreator";

import styles from "./Login.module.scss";
import { LocationState } from "../../models/LocationState";
import { Error } from "../../components/Error";
import { Spinner } from "../../components/Spinner";
import { setError } from "../../store/reducers/auth";

const Login: FC = () => {
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { from } = location.state as LocationState;

  const loginCallback = () => {
    navigate(from.pathname, { replace: true });
  };

  useEffect(() => {
    const cleanError = () => {
      dispatch(setError(""));
    };
    return cleanError;
  }, []);

  const onConnectWallet: React.MouseEventHandler<HTMLElement> = () => {
    dispatch(
      authActionCreator(MetamaskRequests.ETH_REQUEST_ACCOUNTS, loginCallback)
    );
  };

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error} savingLink="/" savingTitle="home" />;

  return (
    <Row justify="center" className={styles["login-row"]}>
      <Col>
        <Typography.Text className={styles["sub-title"]}>
          Dashboard
        </Typography.Text>
        <Typography.Text className={styles.title}>
          Coin Trade Bot
        </Typography.Text>
        <Button
          className={styles["connect-wallet"]}
          block
          onClick={onConnectWallet}
        >
          Connect Wallet
        </Button>
      </Col>
    </Row>
  );
};

export { Login };
