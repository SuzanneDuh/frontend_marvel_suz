import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer-container">
      <div className="footer-button">
        <button
          onClick={() => {
            navigate("/termsofuse");
          }}
          className="terms-of-use"
        >
          Terms of Use
        </button>
        <button
          onClick={() => {
            navigate("/privacypolicy");
          }}
          className="privacy-policy"
        >
          Privacy Policy
        </button>
      </div>
    </div>
  );
};

export default Footer;
