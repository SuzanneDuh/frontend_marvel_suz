import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";

import "./index.css";

import Card from "../../components/Cards/Card";

const Character = () => {
  // (on stocke les données que j'ai récupéré dans data, et pr qu'on ai pas la phrases que data existe pas encore, on met la phrase d'en dessous data is loading)
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();

  // on met useeffect avec une fonction qui est vide, ce qui va me permettre d'executer cette fonction une seule fois au chargement du composant

  useEffect(() => {
    // fetchdata : fonction asynchrone car dedans on va vouloir fr une requete axios au serveur. et nb : c requete à MON serveur. pas à l'API marvel
    // erreur recurennte : async sans h à la fin !!!!
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3100/characters?name=${search}`
        );
        // yes, mon console log de resp data marche dc je peux fr set data...ms debilos faut ensuite fr modif ds le return ^^
        // console.log(response.data);
        setData(response.data);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [search]);

  return (
    // return isLoading ? (
    //   <div>Page en cours de chargement</div>
    // ) : (
    <div className="pgcharacter">
      {/* <div>coucou de la page character</div> */}
      <div>{/* <Card></Card> */}</div>
      {/* debilos, ta card ne s'affichait pas car t'avais juste mis data.results.map, t'avais ouvlié le data.result avant */}

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Recherche des personnages"
          onChange={(event) => setSearch(event.target.value)}
        />
        <FontAwesomeIcon icon="search" className="search-input-icon" />
      </div>

      <div className="pgcharacter-card-wrapper">
        {data.results &&
          data.results.map((character, index) => {
            return <Card key={index} data={character} />;
          })}
      </div>

      {/* <div>
        {data.results.map((character, index) => {
          return (
            // fr une card ac personnage, key doit être au plus haut
            <div className="cardpgcharacter" key={character._id}>
              <p>{character.name}</p>
              <p>{character.description}</p>
              <img
                // argggg path et extension jpg sur 2 lignes... enfin trouve..bien retenir le truc+++
                // key={index}
                className="imgcharacters"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt="marvel"
              />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Character;
