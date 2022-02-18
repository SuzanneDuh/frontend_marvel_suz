import React from "react";
// import { useNavigate } from "react-router-dom";

import "./index.css";

const Card = ({ data }) => {
  // const navigate = useNavigate();
  return (
    <div className="cardpgcharacter">
      {/* <div>coucou de cette foutue card à la noix grrrr </div> */}
      {/* rrr.. data.name et par data.result.name ^^ */}
      <img
        // argggg path et extension jpg sur 2 lignes... enfin trouve..bien retenir le truc+++
        // key={index}
        className="imgcharacters"
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        // alt={}
      />
      <div>{data.name}</div>
      <div>{data.description}</div>
    </div>
  );
};

export default Card;
