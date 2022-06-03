import axios from "axios";
import { fetchCurrenciesSuccess, setCurrenciesIsLoading } from ".";
import { AppDispatch } from "../..";
import { ICurrency } from "../../../models/CurrenciesState";

export const currenciesActionCreator = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setCurrenciesIsLoading(true));
    const currenciesList = await axios.get<ICurrency[]>(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=11&page=1&sparkline=false"
    );
    dispatch(fetchCurrenciesSuccess(currenciesList.data));
  } catch (error) {
    console.log(error);
  }
};
