import { createContext } from "react";
import useCountNumber, { defaultUseCountNumber } from "./useCountNumber";
import useTable, { defaultTableProvider } from "./useTable";

type GlobalContextType = {
  countProvider: ReturnType<typeof useCountNumber>;
  tableProvider: ReturnType<typeof useTable>;
};

export const GlobalContext = createContext<GlobalContextType>({
  countProvider: defaultUseCountNumber,
  tableProvider: defaultTableProvider,
});

const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const countProvider = useCountNumber();
  const tableProvider = useTable();
  return (
    <GlobalContext.Provider value={{ countProvider, tableProvider }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
