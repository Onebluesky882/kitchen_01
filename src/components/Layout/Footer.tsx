import "./styles/Footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <Link to={"/"}>
          <div className="footer-column">
            <p>homepage</p>
          </div>
        </Link>
        <Link to={"/add-menu"}>
          <div className="footer-column">
            <p>Add Menu</p>
          </div>
        </Link>
        <div className="footer-column">
          <p>menu</p>
        </div>
        <div className="footer-column">
          <p>menu</p>
        </div>
        <div className="footer-column">
          <p>menu</p>
        </div>
      </div>
    </div>
  );
};
