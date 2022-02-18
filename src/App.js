import "./App.css";

import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Cookies from "js-cookie";
import axios from "axios";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Character from "./pages/Character/Character";
import Comics from "./pages/Comics/Comics";
import Footer from "./components/Footer/Footer";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faSearch, faCheck, faRedo } from "@fortawesome/free-solid-svg-icons";
// library.add(faSearch, faCheck, faRedo);

// nb pr memoire, au chargement de la page, on veut chercher les données, les récupérer et les stocker dans un état : pr cela on a besoin de usestate et useeffect et axios.
// import { useState, useEffect } from "react";
// import axios from "axios";

// mettre ici mon router +++ et ds chaque page (comics, character) fr le use effect avec la requete vers la route qui correspond

// ms il va pas le fr dc il met axios ici, nb axios c pr recup données aupres du serveur

function App() {
  // (on stocke les données que j'ai récupéré dans data, et qu'on ait pas la phrases que data existe pas encore, on met la phrase d'en dessous data is loading)
  const [data, setData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // on met useeffect avec une fonction qui est vide, ce qui va me permettre d'executer cette fonction une seule fois au chargement du composant

  useEffect(() => {
    // fetchdata : fonction asynchrone car dedans on va vouloir fr une requete axios au serveur. et nb : c requete à MON serveur. pas à l'API marvel
    // grrrrrrr async sans h à la fin !!!! tu te plantes tt le tps
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3100/characters`);
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
  }, []);

  return (
    <Router>
      <Header>
        {/* // setUser={setUser}
        // token={token}
        // setSearch={setSearch} */}
      </Header>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/character" data={data} element={<Character />} />
        <Route path="/comics" data={data} element={<Comics />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
