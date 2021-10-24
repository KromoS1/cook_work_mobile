import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, StoreType} from '../redux/Store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;
