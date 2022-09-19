import React, { useState, useEffect } from "react";

//!css
import "./css/defaultCss/App.css";

//!hooks
import { useFetch } from "./hooks/useFetch";

//!components
import { Loader } from "./atomos/Loader/Loader";

import { GetCharacters } from "./components/Characters/GetCharacters";

//!react router DOM
import { BrowserRouter as BrRouter, Routes, Route } from "react-router-dom";

import { ViewSpecificCharacter } from "./components/ViewSpecificCharacter/ViewSpecificCharacter";
import { Header } from "./atomos/Header/Header";

//*import page de la vista de autenticación

import { AuthView } from "./pages/AuthView";

import { login, getOutApp } from "./firebase/main";
import { AuthEmailPassword } from "./pages/AuthEmailPassword";

const App = () => {
  //! recuperación del elemento a través de local storage
  const recoveryCharacter: any = localStorage.getItem("dataAllCharacters");
  const recoveryDataGoogle: any = localStorage.getItem("googleToken");

  //!manejo del estado de autenticación con google

  const [authState, setAuthState] = useState<any>(
    "" || JSON.parse(recoveryDataGoogle)
  );

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
  //*change state initi session
  /* useEffect(() => {
    window.addEventListener("DOMContentLoaded", () => {
      set
    });
  })*/
  //*specific characters
  /*  useEffect(() => {
    const getData = async (url: string) => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setDataSpecifCharacter(json);
      } catch (err) {
        console.log(err);
      }
    };
    getData(`https://rickandmortyapi.com/api/character/${idCharacter}`);
  }, [idCharacter]);*/

  //!uso del useLocalStorage

  const setLocalStorage = (value: any) => {
    //* actualizo los dos estados identicos que tengo para poder guardarlos y usarlos ambos desde local storage
    setDataCharacter(value);
    /*setDataBackUpCharacter(value)*/
    window.localStorage.setItem("dataAllCharacters", JSON.stringify(value));
  };

  const setLocalStorageGoogle = (value: any) => {
    //* actualizo los dos estados identicos que tengo para poder guardarlos y usarlos ambos desde local storage
    setAuthState(value);
    /*setDataBackUpCharacter(value)*/
    window.localStorage.setItem("googleToken", JSON.stringify(value));
  };

  return (
    <section className="App">
      <BrRouter>
        {/*este va a ser el nuevo main header*/}
        {/* este inicio de sesión se debe acomodar solo dentro de una page aparte pero por el momento se procede a dejar así*/}
        {!authState && (
          <>
            <button
              onClick={() => login(setLocalStorageGoogle)}
              style={{ marginTop: "45px" }}
            >
              iniciar con google
            </button>

            <div>sign up</div>
            <div>
              <AuthEmailPassword />
            </div>
          </>
        )}
        {authState && (
          <>
            <Header dataCharacter={dataCharacter} />

            <AuthView
              google={authState}
              getOutApp={getOutApp}
              setGoogle={setAuthState}
            />
            <Routes>
              <Route
                path={`/character/:Id`}
                element={<ViewSpecificCharacter />}
              />

              <Route
                path="/"
                element={
                  <GetCharacters
                    setLocalStorage={setLocalStorage}
                    dataCharacter={dataCharacter}
                    setDataCharacter={setDataCharacter}
                    dataBackUpCharacter={dataBackUpCharacter}
                    setDataBackUpCharacter={setDataBackUpCharacter}
                    deleteCharacter={deleteCharacter}
                    findCharacter={findCharacter}
                  />
                }
              />
            </Routes>
          </>
        )}
      </BrRouter>
    </section>
  );
};

export default App;
