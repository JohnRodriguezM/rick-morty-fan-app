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

const App = () => {
  //!estados de la app

  const db: any[] = [];

  const [dataCharacter, setDataCharacter] = useState<any>(db);
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

  return (
    <section className="App">
      <BrRouter>
        <Routes>
          <Route
            path="/"
            element={
              <GetCharacters
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
