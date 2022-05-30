import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Row, Typography } from "antd";

import { useAppDispatch, useTypedSelector } from "../../hook/redux";
import {
  authActionCreator,
  MetamaskRequests,
} from "../../store/reducers/auth/authActionCreator";

import styles from "./Login.module.scss";
import { Error } from "../../components/Error";
import { Spinner } from "../../components/Spinner";

const Login: FC = () => {
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  let pageFrom: string = "/";
  // TODO: how to avoid this converting
  pageFrom = (location.state as any).from.pathname;

  const loginCallback = () => {
    navigate(pageFrom, { replace: true });
  };

  const onConnectWallet: React.MouseEventHandler<HTMLElement> = () => {
    dispatch(
      authActionCreator(MetamaskRequests.ETH_REQUEST_ACCOUNTS, loginCallback)
    );
  };

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error} savingLink="/" savingTitle="home" />;

  return (
    <Row justify="center" className={styles.loginRow}>
      <Col>
        <Typography.Text className={styles.subTitle}>Dashboard</Typography.Text>
        <Typography.Text className={styles.title}>
          Coin Trade Bot
        </Typography.Text>
        <Button
          className={styles.connectWallet}
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
