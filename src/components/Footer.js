import React from "react";
import PropTypes from "prop-types"; // For prop validation
import "./Footer.css";
import elbrit from "../Assets/elbertIcon.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PinDropIcon from "@mui/icons-material/PinDrop";

// Reusable Footer Item Component
const FooterItem = ({ Icon, label, value }) => {
  return (
    <div className="footer-item">
      <span className="icon">{Icon && <Icon fontSize="large" />}</span>
      <div className="footer-info">
        <span className="label">{label}</span>
        <span className="value">{value}</span>
      </div>
    </div>
  );
};

FooterItem.propTypes = {
  Icon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      {/* Contact Section */}
      <div className="footer-grid">
        <FooterItem
          Icon={PhoneIcon}
          label="Phone Number"
          value="+974 3118 1843"
        />
        <FooterItem
          Icon={AttachEmailIcon}
          label="Email Address"
          value="Elbrithealth@gmail.com"
        />
        <FooterItem
          Icon={PinDropIcon}
          label="Office Location"
          value="Ambassador Street, Zone 61"
        />
        <div className="footer-info">
          <img src={elbrit} alt="Elbrit Icon" />
        </div>
        <div className="contact-item">
          <p>
            <span className="label">
              Your health, physical and emotional well-being is important to us.
              We are always by your side and have made it even easier for you to
              find the necessary vitamins.
            </span>
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <p className="footer-bottom">
        © Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
      </p>
    </footer>
  );
};

export default Footer;
