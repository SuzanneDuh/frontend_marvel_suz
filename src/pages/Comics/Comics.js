import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./index.css";

import Cardscommics from "../../components/Cardscomics/Cardscomics";

const Comics = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3100/comics`);
        // console.log(response.data);
        setData(response.data);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);

  return (
    // return isLoading ? (
    //   <div>Page en cours de chargement</div>
    // ) : (
    <div>
      {/* <div>coucou de la page Comics</div> */}
      {/* alleluia le bonheur qd les ptits comics s'affichent !!! */}
      <div className="pgcomics-card-wrapper">
        {data.results &&
          data.results.map((comics, index) => {
            return <Cardscommics key={index} data={comics} />;
          })}
      </div>
    </div>
  );
};

export default Comics;
