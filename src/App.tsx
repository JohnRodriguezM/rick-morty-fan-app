import React, { useState, useEffect, Suspense, FC } from "react";

//!css
import "./css/defaultCss/App.css";

import { GetCharacters } from "./components/Characters/GetCharacters";

//!react router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ViewSpecificCharacter } from "./components/ViewSpecificCharacter/ViewSpecificCharacter";

import { HeaderWithAuth } from "./atomos/Header/HeaderWithAuth";

//*import page de la vista de autenticación

import AuthView from "./pages/AuthView";

import { getOutApp } from "./firebase/main";
import { SignUpEmailPassword } from "./pages/withOutAuth/SignUpEmailPassword/SignUpEmailPassword";

import { WithOutAuth } from "./pages/withOutAuth/WithOutAuth";
import { Home } from "./pages/home/Home";
import { ViewEpisodes } from "./components/Allepisodes/ViewEpisodes";
import { Episode } from "./pages/Episode/Episode";
import { Contributions } from "./pages/Contributions/Contributions";
import { LikedCharacters } from "./pages/Liked/LikedCharacters";

//? importe de los tipados
import { Character } from "./types/GetCharacterAll.services";

//!react router dom
import { Link } from "react-router-dom";

//*page 404
import { Page404 } from "./pages/404/404";

const App: FC = () => {
  const mainDb: Character[] = [];
  const likedCharactersInitialValue: Character[] = [];

  //!  Apara almacenar los personajes favoritos
  const [liked, setLiked] = useState(likedCharactersInitialValue);

  //? se usan dos arrays como almacen de datos para el filtro de personajes a través del input de búsqueda
  const [dataCharacter, setDataCharacter] = useState(mainDb);

  const [dataBackUpCharacter, setDataBackUpCharacter] = useState(mainDb);

  //! función para borrar personajes de los main Characters
  const deleteCharacter = (id: string | number) => {
    const dataFilter = dataCharacter.filter((el: any) => el.id !== id);
    setDataCharacter(dataFilter);
  };

  //!función para buscar el personaje de los main Characters
  const findCharacter = (searchInput: string) => {
    const arrayResults = dataBackUpCharacter.filter((el: Character) => {
      let text = el.name.toLowerCase();
      let searchedValue = searchInput.toLowerCase();
      if (text.includes(searchedValue)) return el;
    });
    setDataCharacter(arrayResults);
  };

  return (
    <section className="App">
      <Router>
        <>
          <Routes>
            <Route
              path={`/home/character/:Id`}
              element={
                <>
                  <HeaderWithAuth />
                  <ViewSpecificCharacter {...{ liked, setLiked }} />
                </>
              }
            />
            <Route
              path="/home/all-characters"
              element={
                <>
                  <HeaderWithAuth />
                  <GetCharacters
                    {...{
                      dataCharacter,
                      setDataCharacter,
                      setDataBackUpCharacter,
                      deleteCharacter,
                      findCharacter,
                    }}
                  />
                </>
              }
            />
            {/**/}
            <Route
              path={`/home/episode/:Id`}
              element={
                <>
                  <HeaderWithAuth />
                  <Episode />
                </>
              }
            />
            {/**/}

            <Route
              path="/contributions"
              element={
                <>
                  <HeaderWithAuth />
                  <Contributions />
                </>
              }
            />

            <Route
              path="/liked-characters"
              element={
                <>
                  <HeaderWithAuth />
                  <LikedCharacters {...{ liked, setLiked }} />
                </>
              }
            />

            <Route
              path="/home"
              element={
                <Home>
                  <HeaderWithAuth />
                  <AuthView {...{ getOutApp }} />
                  <ViewEpisodes />
                </Home>
              }
            />

            {/*se empieza desde lo no autenticacado*/}

            <Route path={`/signup`} element={<SignUpEmailPassword />} />

            <Route path="/" element={<WithOutAuth />} />
            <Route
              path={`*`}
              element={
                <>
                  <Page404 />
                </>
              }
            />
          </Routes>
        </>
      </Router>
    </section>
  );
};

export default App;
