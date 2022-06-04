export interface ICurrencyState {
  currencies: ICurrency[];
  error: string;
  isLoading: boolean;
}

export interface ICurrency {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
}
