import React, { useState, useEffect } from "react";

//!css
import "./css/defaultCss/App.css";

//!hooks
import { useFetch } from "./hooks/useFetch";

//!components
import { Loader } from "./atomos/Loader/Loader";

import { GetCharacters } from "./components/Characters/GetCharacters";

//!react router DOM
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import { ViewSpecificCharacter } from "./components/ViewSpecificCharacter/ViewSpecificCharacter";

import { HeaderWithOutAuth } from "./atomos/Header/HeaderWithOutAuth";
import { HeaderWithAuth } from "./atomos/Header/HeaderWithAuth";

//*import page de la vista de autenticación

import { AuthView } from "./pages/AuthView";

import { login, getOutApp, loginGitHub } from "./firebase/main";
import { SignUpEmailPassword } from "./pages/SignUpEmailPassword";

//? se pasara este componente cuando se separe la vista de inicio de sesión de google
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const App = () => {
  //! recuperación del elemento a través de local storage
  const recoveryCharacter: any = localStorage.getItem("dataAllCharacters");
  const recoveryDataGoogle: any = localStorage.getItem("googleToken");

  //!manejo del estado de autenticación con google
  /*const navigate = useNavigate();*/
  const [authState, setAuthState] = useState<any>(false);

  const [googleAuth, setGoogleAuth] = useState<any>(
    "" || JSON.parse(recoveryDataGoogle)
  );

  const [ghAuth, setGhAutg] = useState<any>("");

  //!estados de la app

  const db: any[] = [];

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

  const setLocalStorageGoogle = (value: any) => {
    //* actualizo los dos estados identicos que tengo para poder guardarlos y usarlos ambos desde local storage
    setGoogleAuth(value);
    /*setDataBackUpCharacter(value)*/
    window.localStorage.setItem("googleToken", JSON.stringify(value));
    setAuthState(true);
  };

  const setLocalStorageGitHub = (value: any) => {
    //* actualizo los dos estados identicos que tengo para poder guardarlos y usarlos ambos desde local storage
    setGhAutg(value);
    /*setDataBackUpCharacter(value)*/
    window.localStorage.setItem("githubToken", JSON.stringify(value));
    setAuthState(true);
  };

  return (
    <section className="App">
      <Router>
        <>
          <Routes>
            <Route
              path={`/home/character/:Id`}
              element={<ViewSpecificCharacter />}
            />

            <Route
              path="/home"
              element={
                <>
                  {/* <HeaderWithAuth />*/}
                  <GetCharacters
                    setLocalStorage={setLocalStorage}
                    dataCharacter={dataCharacter}
                    setDataCharacter={setDataCharacter}
                    dataBackUpCharacter={dataBackUpCharacter}
                    setDataBackUpCharacter={setDataBackUpCharacter}
                    deleteCharacter={deleteCharacter}
                    findCharacter={findCharacter}
                  />
                </>
              }
            />

            {/*se empieza desde lo no autenticacado*/}

            <Route path={`/signUp`} element={<SignUpEmailPassword />} />
            <Route path="/" element={<HeaderWithOutAuth />} />
            <Route
              path="/"
              element={
                <>
                  <button
                    onClick={() => {
                      login(setLocalStorageGoogle);
                    }}
                    style={{
                      marginTop: "45px",
                      backgroundColor: "#1E293B90",
                      padding: "10px",
                      borderRadius: "10px",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Login with google <GoogleIcon />
                  </button>

                  <button
                    onClick={() => {
                      loginGitHub(setLocalStorageGitHub);
                    }}
                    style={{
                      marginTop: "20px",
                      backgroundColor: "black",
                      padding: "10px",
                      borderRadius: "10px",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Login with Github <GitHubIcon />
                  </button>
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
