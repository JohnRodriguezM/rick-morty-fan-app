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
import { Header } from "./atomos/Header/Header";
import { ViewSpecificCharacter } from "./components/ViewSpecificCharacter/ViewSpecificCharacter";
import { OptionHeader } from "./OptionHeader";

const App = () => {
  //!estados de la app

  const db: any[] = [];
  //! recuperación del elemento a través de local storage
  const recoveryCharacter: any = localStorage.getItem("dataAllCharacters");

  const [dataCharacter, setDataCharacter] = useState<any>(
    JSON.parse(recoveryCharacter) || db
  );

  const [dataBackUpCharacter, setDataBackUpCharacter] = useState<any>(db);

  const [idCharacter, setIdCharacter] = useState<string>("");
  const [dataSpecifCharacter, setDataSpecifCharacter] = useState<any>([]);

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

  //*specific characters
  useEffect(() => {
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
  }, [idCharacter]);

  //!uso del useLocalStorage

  const setLocalStorage = (value: any) => {
    //* actualizo los dos estados identicos que tengo para poder guardarlos y usarlos ambos desde local storage
    setDataCharacter(value);
    /*setDataBackUpCharacter(value)*/
    window.localStorage.setItem("dataAllCharacters", JSON.stringify(value));
  };

  return (
    <section className="App">
      <BrRouter>
        {/*este va a ser el nuevo main header*/}
        <OptionHeader
          dataCharacter={dataCharacter}
          idCharacter={idCharacter}
          setIdCharacter={setIdCharacter}
        />
        <Header
          idCharacter={idCharacter}
          setIdCharacter={setIdCharacter}
          dataCharacter={dataCharacter}
        />
        <Routes>
          <Route
            path={`/character/:Id`}
            element={
              <ViewSpecificCharacter
                dataSpecifCharacter={dataSpecifCharacter}
              />
            }
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
      </BrRouter>
    </section>
  );
};

export default App;
