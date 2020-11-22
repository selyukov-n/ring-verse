import { createContext, useContext } from "react";
import data from "./data";

const Context = createContext(data);

export const Provider = Context.Provider;
export const useDataContext = () => useContext(Context);
