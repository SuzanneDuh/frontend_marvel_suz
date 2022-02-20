import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const Card = ({ data, character }) => {
  const navigate = useNavigate();
  return (
    <div
      className="cardpgcharacter"
      onClick={() => navigate(`/comics/${character._id}`)}
    >
      {/* <div>coucou de cette foutue card à la noix grrrr </div> */}
      {/* rrr.. data.name et par data.result.name ^^ */}
      <img
        // argggg les coquins : path et extension jpg sur 2 lignes... enfin trouve..bien retenir le truc+++
        // key={index}
        className="imgcharacters"
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt=""
        // alt={}
      />
      <div className="cardpgcharacternamedesc">
        <div className="cardpgcharactername">{data.name}</div>
        <br />
        <div>{data.description}</div>
      </div>
    </div>
  );
};

export default Card;
