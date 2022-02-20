import React from "react";
// import { useNavigate } from "react-router-dom";

import "./index.css";

const Cardscommics = ({ data }) => {
  // const navigate = useNavigate();
  return (
    <div className="cardscomicspgcharacter">
      <img
        className="imgcardscomicscharacters"
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt=""
      />
      <div className="imgcardscomicscharactersdescname">
        <div className="imgcardscomicscharactersname">{data.title}</div>
        <br />
        <div>{data.description}</div>
      </div>
    </div>
  );
};

export default Cardscommics;
