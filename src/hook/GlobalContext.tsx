import { createContext } from "react";
import useTable, { defaultTableProvider } from "./useTable";
import useOrder, { defaultOrderProvider } from "./useOrder";
import useMenu, { defaultMenuProvider } from "./useAddItem";

type GlobalContextType = {
  tableProvider: ReturnType<typeof useTable>;
  orderProvider: ReturnType<typeof useOrder>;
  menuProvider: ReturnType<typeof useMenu>;
};

export const GlobalContext = createContext<GlobalContextType>({
  tableProvider: defaultTableProvider,
  orderProvider: defaultOrderProvider,
  menuProvider: defaultMenuProvider,
});

const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const tableProvider = useTable();
  const orderProvider = useOrder();
  const menuProvider = useMenu();
  return (
    <GlobalContext.Provider
      value={{ tableProvider, orderProvider, menuProvider }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
