import detectEthereumProvider from "@metamask/detect-provider";
import { ProviderRpcError } from "hardhat/types";
import { errorAuth, setAdmin, setIsLoading, successAuth } from ".";
import { AppDispatch } from "../..";

export enum MetamaskRequests {
  ETH_REQUEST_ACCOUNTS = "eth_requestAccounts",
  ETH_ACCOUNTS = "eth_accounts",
}

const adminAddresses: string[] = [
  "0x16aae6727ec132b428af83ed7347529529fb6163", // Danila
  "0xdc3d3fa1aebd13ff247e5f5d84a08a495b3215fb", // Nichita
];

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
          if (adminAddresses.indexOf(accounts[0]) > -1) {
            dispatch(setAdmin(true));
          }
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
