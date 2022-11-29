//!librerias

import React, { useEffect, FC, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

//!components
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

//!hooks

//!styles
//!css
import "./css/defaultCss/App.css";

//!firebase-hooks
//!funciones
//!variables u otros
//!types

//!para messaging

import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase/main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormKnowYou } from "./pages/FormKnowYou/FormKnowYou";
import { SeeUser } from "./components/SeeUser/SeeUser";
import { LikedCharactersProvider } from "./context/LikedCharacters";
import { AppRouter } from "./routes/Router";

export const App: FC = () => {
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

  return (
    <section className="App">
      <LikedCharactersProvider>
        <AppRouter />
      </LikedCharactersProvider>
    </section>
  );
};

export default App;
