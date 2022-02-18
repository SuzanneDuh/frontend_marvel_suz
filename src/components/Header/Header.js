import React from "react";
import logo from "../../assets/marvel-logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

import "./index.css";

const Header = () => {
  const navigate = useNavigate();

  //   const location = useLocation();

  return (
    <div className="header-container">
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img className="header-logo" src={logo} alt="marvel" />
      </div>
      <div className="header-button">
        <button
          onClick={() => {
            navigate("/character");
          }}
          className="header-button-character"
        >
          PERSONNAGES
        </button>
        <button
          onClick={() => {
            navigate("/comics");
          }}
          className="header-button-comics"
        >
          COMICS
        </button>
        <button
          onClick={() => {
            navigate("/favoris");
          }}
          className="header-button-favoris"
        >
          FAVORIS
        </button>
      </div>
    </div>
  );
};

export default Header;
