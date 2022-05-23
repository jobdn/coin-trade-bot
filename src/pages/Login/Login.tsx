import { Button, Col, Row, Typography } from "antd";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hook/redux";
import { setIsLoading, successAuth } from "../../store/reducers/auth";
import styles from "./Login.module.scss";

const Login: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  let pageFrom: string = "/";
  // TODO: how to avoid this converting
  pageFrom = (location.state as any).from.pathname;

  const onConnectWallet: React.MouseEventHandler<HTMLElement> = () => {
    // TODO: delete this
    dispatch(setIsLoading(true));

    setTimeout(() => {
      dispatch(successAuth("User"));
      dispatch(setIsLoading(false));
      navigate(pageFrom, { replace: true });
    }, 3000);
  };

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
