import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import TableNo from "./types/TableNo";
import NavTableWidget from "./components/NavTableWidget";
import GlobalProvider from "./hook/GlobalContext";
import "./App.css";
function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/" element={<NavTableWidget />} />
            <Route path="/:tableNo" element={<TableNo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}
export default App;
