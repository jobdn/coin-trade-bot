import detectEthereumProvider from "@metamask/detect-provider";
import { errorAuth, setIsLoading, successAuth } from ".";
import { AppDispatch } from "../..";

export const authActionCreator =
  (cb: () => void) => async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    try {
      const provider = await detectEthereumProvider();
      if (provider) {
        const accounts = await (provider as any).request({
          method: "eth_requestAccounts",
        });
        if (accounts.length) {
          dispatch(successAuth(accounts[0]));
        }
        dispatch(setIsLoading(false));
        cb();
      } else {
        dispatch(errorAuth("Please install metamast extention"));
      }
    } catch (error) {
      dispatch(errorAuth("Some thing went wrong :("));
    }
  };
