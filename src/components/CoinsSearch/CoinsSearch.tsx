import { Input } from "antd";
import React from "react";
import { useAppDispatch, useTypedSelector } from "../../hook/redux";
import { startFetchCoins } from "../../store/reducers/coins";
import { fetchCoins } from "../../store/reducers/coins/fetchCoins";

export const CoinsSearch: React.FC = () => {
  const dispatch = useAppDispatch();
  const { search } = useTypedSelector((state) => state.coins);

  // TODO: Should I make request every time when user type
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch(startFetchCoins(event.target.value));
  };

  React.useEffect(() => {
    dispatch(fetchCoins(search));
  }, [search, dispatch]);

  return (
    <Input
      value={search}
      onChange={handleInputChange}
      placeholder="Search coin"
    />
  );
};
