import { Input } from "antd";
import React from "react";
import { useAppDispatch, useTypedSelector } from "../../hook/redux";
import { startFetchCoins } from "../../store/reducers/coins";
import { fetchCoins } from "../../store/reducers/coins/fetchCoins";

export const CoinsSearch: React.FC = () => {
  const dispatch = useAppDispatch();
  const { search } = useTypedSelector((state) => state.coins);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch(startFetchCoins(event.target.value));
  };

  React.useEffect(() => {
    // const fetchCoinsId = setTimeout(() => {
    //   dispatch(fetchCoins(search));
    // }, 1000);
    // return () => clearTimeout(fetchCoinsId);
  }, [search]);

  return (
    <Input
      value={search}
      onChange={handleInputChange}
      placeholder="Search coin"
    />
  );
};
