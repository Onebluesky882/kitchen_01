import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";
import { useEffect } from "react";
import { useTheme } from "../../hook/useTheme";

const Layout = () => {
  const theme = useTheme();
  useEffect(() => {
    if (theme) {
      const backGroundColor = theme?.cream || "";
      document.body.style.backgroundColor = backGroundColor;
    }
  });
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
