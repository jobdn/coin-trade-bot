import detectEthereumProvider from "@metamask/detect-provider";
import { ProviderRpcError } from "hardhat/types";
import { errorAuth, setIsLoading, successAuth } from ".";
import { AppDispatch } from "../..";

export enum MetamaskRequests {
  ETH_REQUEST_ACCOUNTS = "eth_requestAccounts",
  ETH_ACCOUNTS = "eth_accounts",
}

export const authActionCreator =
  (method: MetamaskRequests, cb?: () => void) =>
  async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    const provider = await detectEthereumProvider();
    if (provider) {
      try {
        // TODO: make it without (... as any).
        const accounts = await (provider as any).request({
          method,
        });

        if (accounts.length) {
          dispatch(successAuth(accounts[0]));
        }

        if (cb) {
          cb();
        }

        dispatch(setIsLoading(false));
      } catch (e) {
        dispatch(errorAuth((e as ProviderRpcError).message));
      }
    } else {
      dispatch(errorAuth("Please install metamask extention"));
    }
  };
