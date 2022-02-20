import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";

import "./index.css";

import Card from "../../components/Cards/Card";

const Character = () => {
  // (on stocke les données que j'ai récupéré dans data, et pr qu'on ai pas la phrases que data existe pas encore, on met la phrase d'en dessous data is loading)
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();

  // on met useeffect avec une fonction qui est vide, ce qui va me permettre d'executer cette fonction une seule fois au chargement du composant

  useEffect(() => {
    // fetchdata : fonction asynchrone car dedans on va vouloir fr une requete axios au serveur. et nb : c requete à MON serveur. pas à l'API marvel
    // erreur recurennte : async sans h à la fin !!!!
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-back-suz.herokuapp.com/characters?name=${search}`
        );
        // yes, mon console log de resp data marche dc je peux fr set data...ms debilos faut ensuite fr modif ds le return ^^
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <div className="pageencoursdechargement">
      <div>Page en cours de chargement </div>
      <div>
        <FontAwesomeIcon icon="hourglass" className="hourglass" />
      </div>
    </div>
  ) : (
    <div className="pgcharacter">
      {/* <div>coucou de la page character</div> */}
      {/* debilos, ta card ne s'affichait pas car t'avais juste mis data.results.map, t'avais ouvlié le data.result avant */}

      <div className="search-barre">
        <input
          type="text"
          className="search-input"
          placeholder="Chercher un personnage"
          onChange={(event) => setSearch(event.target.value)}
        />
        <FontAwesomeIcon icon="search" className="search-icon" />
      </div>

      <div className="pgcharacter-card-wrapper">
        {data.results &&
          data.results.map((character, index) => {
            return (
              <Card
                key={character._id}
                data={character}
                // arggg.. il manquait cette foutue ligne character=character pr que ton lien se fasse bien entre le click sur le caractere et aller à la page comics/jfdsfsdff(bref l'id du charactere)
                character={character}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Character;
