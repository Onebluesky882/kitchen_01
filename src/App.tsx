import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import TableNo from "./pages/TableNo";
import NavTableWidget from "./components/NavTableWidget";
import ThemeProvider from "./hook/useTheme";
import GlobalProvider from "./hook/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/" element={<NavTableWidget />} />
              <Route path="/:tableNo" element={<TableNo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalProvider>
  );
}
export default App;
