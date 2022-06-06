export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
}

export interface ICoinsState {
  coins: ICoin[];
  error: string;
  isLoading: boolean;
  search: string;
}

export interface ISearchResponse {
  coins: ICoin[];
}
