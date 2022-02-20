import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";

import "./index.css";

const CharacterId = () => {
  const [data, setData] = useState({});
  const { characterId } = useParams();
  // const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      // async sans h !! tu te plantes tt le tps
      try {
        const response = await axios.get(
          `http://localhost:3100/comics/${characterId}`
        );
        // console log de resp.data OK, dc je peux fr set data. ms oublie pas modif ds le return ^^
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <div className="pageencoursdechargement">
      <div>Page en cours de chargement </div>
      <div>
        <FontAwesomeIcon icon="hourglass" className="hourglass" />
      </div>
    </div>
  ) : (
    <div className="character-id-pg">
      <div className="character-id-name-description-img">
        <div className="character-id-name-description">
          <div className="character-id-name">
            {data.name && <h2 className="character-id-name2">{data.name}</h2>}
          </div>
          <div className="character-id-description">
            {data.description && (
              <p className="character-id-description2">{data.description}</p>
            )}
          </div>
        </div>
        <div className="character-id-img-character">
          {/* ??l'image s'affiche bien puis disparait à l'actu de la page et je comprends rien au console log de l'erreur. pb de path ? ms prq ??!!.. */}
          {/* abrutie, t'a cherché 50 ans....la premiere ligne c t data.thumbnail et pas data.thumbnail.path..... */}
          {data.thumbnail && (
            <img
              className="xxx"
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              // alt={data.name}
              alt=""
            />
          )}
        </div>
      </div>
      <div className="character-id-all-comics">
        <div className="character-id-comics-tit">
          Retrouvez ce personnage dans les comics suivants
        </div>
        <div className="character-id-comics-wrapper">
          {data.comics &&
            data.comics.map((title, index) => {
              return (
                <div className="character-id-comics">
                  <div className="abb">
                    <img
                      className="character-id-comics-img"
                      src={`${title.thumbnail.path}.${title.thumbnail.extension}`}
                      alt=""
                    />
                  </div>
                  <div className="character-id-comicsnamedesc">
                    <div className="character-id-comicsname">{title.title}</div>
                    <br />
                    <div>{title.description}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default CharacterId;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import axios from "axios";

// import "./index.css";

// const CharacterId = ({ character }) => {
//   const [data, setData] = useState({});
//   const { id } = useParams();
//   // const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3100/character/:character/${id}`
//         );

//         setData(response.data);
//       } catch (error) {
//         console.log(error.message);
//         console.log(error.response.data);
//       }
//     };
//     fetchData();
//   }, [id]);

//   return (
//     <div className="cardpgcharacter">
//       <img
//         className="imgcharacters"
//         src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
//         alt=""
//       />
//       <div>{data.name}</div>
//       <div>{data.description}</div>
//     </div>
//   );
// };

// export default CharacterId;
