//!librerias

import React, { useState, useEffect, FC } from "react";
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

//!firebase-

import { getOutApp } from "./firebase/main";

//!funciones
//!variables u otros
//!types

import { Character } from "./types/GetCharacterAll.services";

//!para messaging

import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase/main";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//!para messaging

import { onAuthStateChanged, getAuth } from "firebase/auth";
import { FormKnowYou } from "./pages/FormKnowYou/FormKnowYou";

export const App: FC = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  const activeNotifications = async () => {
    try {
      const token = await getToken(messaging, {
        vapidKey: `BGAfGrKj33Y-MyeHFTGLQR05siGmroF0r_ojBEZwW63zZxYBl2t5wqDayZIJtCpLZZssAXoqWef0iKUfASLFUNw`,
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

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) return setUser(user);
      setUser(null);
      navigate("/");
    });
  }, [navigate]);

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
      <>
        <Routes>
          <Route path="/" element={<WithOutAuth />} />
          <Route
            path="/home/*"
            element={
              <Home>
                <>
                  <HeaderWithAuth />
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
                  {user && (
                    <section
                      className={`my-10
                   mx-auto
                  ${
                    user.displayName
                      ? "grid grid-cols-2 w-64 m-10 place-items-center"
                      : ""
                  }
                    `}
                    >
                      <>
                        <h1>Bienvenido {user?.displayName || user.email}</h1>
                        <img
                          src={`${user?.photoURL}`}
                          alt=""
                          className="w-12 rounded-full my-0 mx-auto"
                        />
                      </>
                    </section>
                  )}
                  <ViewEpisodes />
                </>
              }
            />
            <Route path="contributions" element={<Contributions />} />
            <Route path="know-you" element={<FormKnowYou/>} />
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
    </section>
  );
};

export default App;
