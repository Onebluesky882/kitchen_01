import { createContext } from "react";
import useTable, { defaultTableProvider } from "./useTable";
import useOrder, { defaultOrderProvider } from "./useOrder";

type GlobalContextType = {
  tableProvider: ReturnType<typeof useTable>;
  orderProvider: ReturnType<typeof useOrder>;
};

export const GlobalContext = createContext<GlobalContextType>({
  tableProvider: defaultTableProvider,
  orderProvider: defaultOrderProvider,
});

const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const tableProvider = useTable();
  const orderProvider = useOrder();
  return (
    <GlobalContext.Provider value={{ tableProvider, orderProvider }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
