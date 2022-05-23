import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreType } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<StoreType> = useSelector;
