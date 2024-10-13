import { createContext, useContext } from "react";

type Colors = {
  blue?: string;
  pink?: string;
  cream?: string;
  green?: string;
  greenMenu?: string;
};
export const ThemeContext = createContext<Colors>({});

const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const colors: Colors = {
    blue: "#789DBC",
    pink: "#FFE3E3",
    cream: "#FEF9F2",
    green: "#C9E9D2",
    greenMenu: "#95C398",
  };

  return (
    <ThemeContext.Provider value={colors}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

export default ThemeProvider;
