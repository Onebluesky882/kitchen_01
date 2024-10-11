import "./styles/Header.css"; // Import the CSS file where you define the styles
import logo from "@/assets/catjads.png";
import { MenuBarLeft, MenuBarRight } from "./menuBar";
import NavTableWidget from "../NavTableWidget";
export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "120px",
        marginRight: "120px",
        border: "1px solid red ",
        flexDirection: "column",
        borderRadius: "10px",
        marginTop: "10px",
      }}
    >
      <div className="container">
        <MenuBarRight />
        <img src={logo} alt="logo" width={100} />
        <MenuBarLeft />
      </div>
      <header className="header">
        <NavTableWidget />
      </header>
    </div>
  );
};
