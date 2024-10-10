import Navber from "../Navbar";
import "./Header.css"; // Import the CSS file where you define the styles

export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "110px",
        marginRight: "110px",
        border: "1px solid red ",
        padding: "40px",
        justifyContent: "center",
      }}
    >
      <header className="header">
        <Navber />
      </header>
    </div>
  );
};
