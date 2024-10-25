import { createContext } from "react";
import useOrder, { defaultOrderProvider } from "./useOrder";
import useMenu, { defaultMenuProvider } from "./useAddItem";

type GlobalContextType = {
  orderProvider: ReturnType<typeof useOrder>;
  menuProvider: ReturnType<typeof useMenu>;
};

export const GlobalContext = createContext<GlobalContextType>({
  orderProvider: defaultOrderProvider,
  menuProvider: defaultMenuProvider,
});

const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const orderProvider = useOrder();
  const menuProvider = useMenu();
  return (
    <GlobalContext.Provider value={{ orderProvider, menuProvider }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
