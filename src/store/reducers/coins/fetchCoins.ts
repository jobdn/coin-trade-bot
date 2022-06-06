import axios, { AxiosError, AxiosResponse } from "axios";
import { AppDispatch } from "../..";
import { ISearchResponse, ICoin } from "../../../models/CoinsState";
import { fetchCoinsSuccess, fetchCoinsError } from "./index";

const QUERY_URL = "https://api.coingecko.com/api/v3/search?query=";
const INITIAL_COINS_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h";

const getUrlForSearchCoins = (ids: string) => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&&page=1&sparkline=false&price_change_percentage=1h`;
};

const getFormatedCoinsRes = (res: ICoin[]) => {
  return res.map((currency) => {
    return {
      id: currency.id,
      name: currency.name,
      image: currency.image,
      symbol: currency.symbol,
      current_price: currency.current_price,
    };
  });
};

export const fetchCoins = (search: string) => async (dispatch: AppDispatch) => {
  try {
    if (search) {
      const { data: searchRes }: AxiosResponse<ISearchResponse> =
        await axios.get(QUERY_URL + search);

      const searchedIds = searchRes.coins
        .filter((coin) => coin.id.toLocaleLowerCase().startsWith(search))
        .reduce((acc, currentCoin) => acc + currentCoin.id + ",", "")
        .slice(0, -1);

      if (searchedIds.length > 0) {
        const { data: searchedCoins }: AxiosResponse<ICoin[]> = await axios.get(
          getUrlForSearchCoins(searchedIds)
        );
        const formatedRes = getFormatedCoinsRes(searchedCoins);
        dispatch(fetchCoinsSuccess(getFormatedCoinsRes(formatedRes)));
      } else {
        dispatch(fetchCoinsSuccess([]));
      }
    } else {
      const { data: defaultCoins }: AxiosResponse<ICoin[]> = await axios.get(
        INITIAL_COINS_URL
      );
      const formatedRes = getFormatedCoinsRes(defaultCoins);
      dispatch(fetchCoinsSuccess(formatedRes));
    }
  } catch (err) {
    dispatch(fetchCoinsError((err as AxiosError).message));
  }
};
