import "./App.css";

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Cookies from "js-cookie";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// pages
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Character from "./pages/Character/Character";
import CharacterId from "./pages/CharacterId/CharacterId";
import Comics from "./pages/Comics/Comics";
import Favorites from "./pages/Favorites/Favorites";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faHourglass } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faHourglass);

//mettre  mon router ici ds App +++;  et fr les requetes ds chaque page (comics, character) ( use effect avec la requete vers la route qui correspond)

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/character"
          // data={data}
          element={<Character />}
        />
        <Route
          path="/comics/:characterId"
          // data={data}
          element={<CharacterId />}
        />
        <Route
          path="/comics"
          // data={data}
          element={<Comics />}
        />
        <Route path="/nofound" element={<NotFound />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
