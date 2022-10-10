import React, { useState, useEffect, Suspense } from "react";

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
import { SignUpEmailPassword } from "./pages/SignUpEmailPassword";

import { WithOutAuth } from "./pages/withOutAuth/WithOutAuth";
import { Home } from "./pages/home/Home";
import { ViewEpisodes } from "./components/Allepisodes/ViewEpisodes";
import { Episode } from "./pages/Episode/Episode";
import { Contributions } from "./pages/Contributions/Contributions";
import { LikedCharacters } from "./pages/Liked/LikedCharacters";

//? importe de los tipados
import { Character } from "./types/GetCharacterAll.services";

//!react router dom
import { Link, useNavigate } from "react-router-dom";

const App = () => {
  const mainDb: Character[] = [];
  const likedCharactersInitialValue: Character[] = [];

  //! array para almacenar los personajes favoritos
  const [liked, setLiked] = useState(likedCharactersInitialValue);

  //? se usan dos arrays como almacen de datos para el filtro de personajes a través del input de búsqueda
  const [dataCharacter, setDataCharacter] = useState(mainDb);

  const [dataBackUpCharacter, setDataBackUpCharacter] = useState<any>(mainDb);

  const deleteCharacter = (id: string | number) => {
    const dataFilter = dataCharacter.filter((el: any) => el.id !== id);
    setDataCharacter(dataFilter);
  };

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
                  <HeaderWithAuth {...{ dataCharacter }} />
                  <ViewSpecificCharacter {...{ liked, setLiked }} />
                </>
              }
            />

            <Route
              path="/home/all-characters"
              element={
                <>
                  <HeaderWithAuth {...{ dataCharacter }} />
                  <GetCharacters
                    {...{
                      dataCharacter,
                      setDataCharacter,
                      dataBackUpCharacter,
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
                  <HeaderWithAuth {...{ dataCharacter }} />
                  <Episode />
                </>
              }
            />
            {/**/}

            <Route
              path="/contributions"
              element={
                <>
                  <HeaderWithAuth {...{ dataCharacter }} />
                  <Contributions />
                </>
              }
            />

            <Route
              path="/liked-characters"
              element={
                <>
                  <HeaderWithAuth {...{ dataCharacter }} />
                  <LikedCharacters liked={liked} setLiked={setLiked} />
                </>
              }
            />

            <Route
              path="/home"
              element={
                <Home>
                  <HeaderWithAuth dataCharacter={dataCharacter} />
                  <AuthView {...{ getOutApp }} />

                  <ViewEpisodes />
                </Home>
              }
            />

            {/*se empieza desde lo no autenticacado*/}

            <Route path={`/signUp`} element={<SignUpEmailPassword />} />

            <Route
              path="/"
              element={
                <WithOutAuth
                  {...{
                    getOutApp,
                  }}
                />
              }
            />

            <Route
              path={`*`}
              element={
                <>
                  <h1>Página no encontrada</h1>
                  <Link to="/home">Redireccionando...</Link>
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
