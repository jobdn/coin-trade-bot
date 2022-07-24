import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptosApiHeaders = {
  "X-RapidAPI-Key": "6735e05d17mshd3b5a044d47899fp11245ejsnafe7ec2746b2",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

export interface Coin {
  uuid: string;
  name: string;
  price: number;
  marketCap: number;
  rank: number;
  symbol: string;
  iconUrl: string;
  change: number;
}

interface CryptosResponse {
  data: {
    coins: Coin[];
  };
}

const getQuery = (url: string) => ({
  url,
  headers: cryptosApiHeaders,
});

const cryptosApi = createApi({
  reducerPath: "cryptosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://coinranking1.p.rapidapi.com" }),
  endpoints: (builder) => ({
    // TODO: use this TS
    getCtyptos: builder.query<CryptosResponse, number>({
      query: (count) => {
        return getQuery(`/coins?limit=${count}`);
      },
    }),
  }),
});

export const { useGetCtyptosQuery } = cryptosApi;
export default cryptosApi;
