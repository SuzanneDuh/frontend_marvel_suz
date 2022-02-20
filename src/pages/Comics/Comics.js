import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Cardscommics from "../../components/Cardscomics/Cardscomics";

const Comics = () => {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =
          await axios.get`https://marvel-back-suz.herokuapp.com/comics?search=${search}`;
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
        // setPage(1);
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
    <div className="pgcomics">
      <div className="search-barre">
        <input
          placeholder="Chercher un comic"
          className="search-input"
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <FontAwesomeIcon icon="search" className="search-icon" />
      </div>

      {/* <div>coucouuu de la page Comics</div> */}
      {/* alleluia les ptits comics s'affichent !! */}
      <div className="pgcomics-card-wrapper">
        {data.results &&
          data.results.map((comic, index) => {
            return <Cardscommics key={index} data={comic} comic={comic} />;
          })}
      </div>
    </div>
  );
};

export default Comics;
