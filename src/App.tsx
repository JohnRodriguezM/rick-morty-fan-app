//!librerias

import React, { useState, useEffect, FC, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

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

//!firebase-hooks
//!funciones
//!variables u otros
//!types

import { Character } from "./types/GetCharacterAll.services";

//!para messaging

import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase/main";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FormKnowYou } from "./pages/FormKnowYou/FormKnowYou";

import { SeeUser } from "./components/SeeUser/SeeUser";

import { AuthContext } from "./context/AuthContext";


import { Immer } from "./components/Immer/Immer";

export const App: FC = () => {
  const navigate = useNavigate();
  const { userState, handleSession } = useContext(AuthContext);

  useEffect(() => {
    handleSession();
    if (!userState) {
      navigate("/");
    }
  }, [handleSession,userState,navigate]);

  let vapidKey =
    "BGAfGrKj33Y-MyeHFTGLQR05siGmroF0r_ojBEZwW63zZxYBl2t5wqDayZIJtCpLZZssAXoqWef0iKUfASLFUNw";
  const activeNotifications = async () => {
    try {
      const token = await getToken(messaging, {
        vapidKey,
      });
      if (!token) console.log("no hay token");
      console.log("token", token);
    } catch (err) {
      console.log("soy soy", err);
    }
  };

  useEffect(() => {
    activeNotifications();
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      toast(`
      ${payload?.notification?.title},
      ${payload?.notification?.body}
      `);
    });
  }, []);

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

  return (
    <section className="App">
      <>
        <Routes>
          <Route path="/" element={<WithOutAuth />} />
          <Route
            path="/home/*"
            element={
              <Home>
                <>
                  <HeaderWithAuth />
                  <Immer/>
                  <div>
                    <ToastContainer />
                  </div>
                </>
              </Home>
            }
          >
            <Route
              path=""
              element={
                <>
                  <SeeUser />
                  <ViewEpisodes />
                </>
              }
            />
            <Route path="contributions" element={<Contributions />} />
            <Route path="know-you" element={<FormKnowYou />} />
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
                    dataBackUpCharacter,
                    setDataBackUpCharacter,
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
    </section>
  );
};

export default App;
