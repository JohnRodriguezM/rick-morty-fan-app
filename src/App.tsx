import React, { useState, useEffect } from "react";

//!css
import "./css/defaultCss/App.css";

//!hooks
import { useFetch } from "./hooks/useFetch";

//!components
import { Loader } from "./components/Loader/Loader";

import { GetCharacters } from "./components/Characters/GetCharacters";

const App = () => {
  //!estados de la app
  const [dataCharacter, setDataCharacter] = useState<any>([]);
  const [dataBackUpCharacter, setDataBackUpCharacter] = useState<any>([]);

  const deleteCharacter = (id: string | number) => {
    console.log(id);
    const dataFilter = dataCharacter.filter((el: any) => el.id !== id);
    /*console.log("hola");*/
    console.log(dataFilter);
    setDataCharacter(dataFilter);
  };

  return (
    <div className="App">
      <header className="App-header">
        <GetCharacters
          dataCharacter={dataCharacter}
          setDataCharacter={setDataCharacter}
          dataBackUpCharacter={dataBackUpCharacter}
          setDataBackUpCharacter={setDataBackUpCharacter}
          deleteCharacter={deleteCharacter}
        />
      </header>
    </div>
  );
};

export default App;
