//!librerias

import React, { useState, useEffect, Suspense, FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//!components

import AuthView from "./pages/AuthView";
import { Home } from "./pages/home/Home";
import { Page404 } from "./pages/404/404";
import { Episode } from "./pages/Episode/Episode";
import { WithOutAuth } from "./pages/withOutAuth/WithOutAuth";
import { HeaderWithAuth } from "./atomos/Header/HeaderWithAuth";
import { LikedCharacters } from "./pages/Liked/LikedCharacters";
import { Contributions } from "./pages/Contributions/Contributions";
import { ViewEpisodes } from "./components/Allepisodes/ViewEpisodes";
import { GetCharacters } from "./components/Characters/GetCharacters";
import { ViewSpecificCharacter } from "./components/ViewSpecificCharacter/ViewSpecificCharacter";
import { SignUpEmailPassword } from "./pages/withOutAuth/SignUpEmailPassword/SignUpEmailPassword";

//!hooks

import { useLocalStorage } from "./hooks/useLocalStorage";

//!styles
//!css

import "./css/defaultCss/App.css";

//!firebase-

import { getOutApp } from "./firebase/main";

//!funciones
//!variables u otros
//!types

import { Character } from "./types/GetCharacterAll.services";

const App: FC = () => {
  const mainDb: Character[] = [];
  const likedCharactersInitialValue: Character[] = [];

  const [liked, setLiked] = useLocalStorage(
    "likedCharacters",
    likedCharactersInitialValue
  );

  //? se usan dos arrays como almacen de datos para el filtro de personajes a través del input de búsqueda
  const [dataCharacter, setDataCharacter] = useState<Character[]>(mainDb);
  const [dataBackUpCharacter, setDataBackUpCharacter] =
    useState<Character[]>(mainDb);

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
            <Route path="/" element={<WithOutAuth />} />
            <Route path="/signup" element={<SignUpEmailPassword />} />
            <Route
              path="/home/*"
              element={
                <Home>
                  <HeaderWithAuth />
                </Home>
              }
            >
              <Route
                path=""
                element={
                  <>
                    <AuthView {...{ getOutApp }} />
                    <ViewEpisodes />
                  </>
                }
              />
              <Route path="contributions" element={<Contributions />} />

              <Route
                path="liked-characters"
                element={<LikedCharacters {...{ liked, setLiked }} />}
              />

              <Route
                path="all-characters"
                element={
                  <GetCharacters
                    {...{
                      dataCharacter,
                      setDataCharacter,
                      setDataBackUpCharacter,
                      deleteCharacter,
                      findCharacter,
                    }}
                  />
                }
              />

              <Route path="episode/:Id" element={<Episode />} />

              <Route
                path="character/:Id"
                element={<ViewSpecificCharacter {...{ liked, setLiked }} />}
              />

              <Route path="*" element={<Page404 />} />
            </Route>

            <Route path="*" element={<Page404 />} />
          </Routes>
        </>
      </Router>
    </section>
  );
};

export default App;
