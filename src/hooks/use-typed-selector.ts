import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootSate } from "../state";

export const useTypedSelector: TypedUseSelectorHook<RootSate> = useSelector;
