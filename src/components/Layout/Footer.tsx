import "./styles/Footer.css";
import Homepage from "../../pages/Homepage";
import { useNavigate } from "react-router-dom";
export const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div onClick={() => navigate("/")} className="footer-column">
          <p>homepage</p>
        </div>
        <div className="footer-column">
          <p>menu</p>
        </div>
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
