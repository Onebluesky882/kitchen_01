import { createContext } from "react";
import useTable, { defaultTableProvider } from "./useTable";

type GlobalContextType = {
  tableProvider: ReturnType<typeof useTable>;
};

export const GlobalContext = createContext<GlobalContextType>({
  tableProvider: defaultTableProvider,
});

const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const tableProvider = useTable();
  return (
    <GlobalContext.Provider value={{ tableProvider }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
