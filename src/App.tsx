import React, { useState, useEffect, Suspense } from "react";

//!css
import "./css/defaultCss/App.css";

import { GetCharacters } from "./components/Characters/GetCharacters";

//!react router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ViewSpecificCharacter } from "./components/ViewSpecificCharacter/ViewSpecificCharacter";

import { HeaderWithAuth } from "./atomos/Header/HeaderWithAuth";

//*import page de la vista de autenticación

import { AuthView } from "./pages/AuthView";

import { getOutApp } from "./firebase/main";
import { SignUpEmailPassword } from "./pages/SignUpEmailPassword";

import { WithOutAuth } from "./pages/withOutAuth/WithOutAuth";
import { Home } from "./pages/home/Home";
import { ViewEpisodes } from "./components/Allepisodes/ViewEpisodes";
import { Episode } from "./pages/Episode/Episode";
import { Contributions } from "./pages/Contributions/Contributions";
import { LikedCharacters } from "./pages/Liked/LikedCharacters";

const App = () => {
  //! recuperación del elemento a través de local storage
  const recoveryCharacter: any = localStorage.getItem("dataAllCharacters");
  const recoveryDataGoogle: any = localStorage.getItem("googleToken");
  const recoveryDataGitHub: any = localStorage.getItem("githubToken");

  //!manejo del estado de autenticación con google

  const [googleAuth, setGoogleAuth] = useState<any>(
    "" || JSON.parse(recoveryDataGoogle)
  );

  const [ghAuth, setGhAutg] = useState<any>(
    "" || JSON.parse(recoveryDataGitHub)
  );

  //!estados de la app

  const db: any[] = [];

  //! array para almacenar los personajes favoritos
  const [liked, setLiked] = useState<any>([]);

  const [dataCharacter, setDataCharacter] = useState<any>(
    JSON.parse(recoveryCharacter) || db
  );

  const [dataBackUpCharacter, setDataBackUpCharacter] = useState<any>(db);

  const deleteCharacter = (id: string | number) => {
    console.log(id);
    const dataFilter = dataCharacter.filter((el: any) => el.id !== id);
    /*console.log("hola");*/
    console.log(dataFilter);
    setDataCharacter(dataFilter);
  };

  const findCharacter = (searchInput: string) => {
    const arrayResults = dataBackUpCharacter.filter((el: any) => {
      let text = el.name.toLowerCase();
      let searchedValue = searchInput.toLowerCase();
      /*console.log(searchedValue);*/
      if (text.includes(searchedValue)) return el;
    });
    setDataCharacter(arrayResults);
  };

  //!uso del useLocalStorage

  const setLocalStorage = (value: any) => {
    //* actualizo los dos estados identicos que tengo para poder guardarlos y usarlos ambos desde local storage
    setDataCharacter(value);
    /*setDataBackUpCharacter(value)*/
    window.localStorage.setItem("dataAllCharacters", JSON.stringify(value));
  };

  return (
    <section className="App">
      <Router>
        <>
          <Routes>
            {/*permite que aparezca el header para todas las rutas*/}
            <Route
              path={`* || /*  || */*`}
              element={<HeaderWithAuth {...dataCharacter} />}
            />
            <Route
              path={`/home/character/:Id`}
              element={
                <>
                  <HeaderWithAuth {...{ dataCharacter }} />
                  <ViewSpecificCharacter
                    {...{ dataCharacter, deleteCharacter, liked, setLiked }}
                  />
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
                      setLocalStorage,
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
                  <HeaderWithAuth dataCharacter={dataCharacter} />
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
                  <AuthView
                    {...{ googleAuth, setGoogleAuth, getOutApp, ghAuth }}
                  />

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
                    googleAuth,
                    setGoogleAuth,
                    getOutApp,
                    ghAuth,
                    setGhAutg,
                  }}
                />
              }
            />
          </Routes>
        </>
      </Router>
    </section>
  );
};

export default App;
