import React from "react";
import "./css/defaultCss/App.css";

import { useFetch } from "./hooks/useFetch";

import { Loader } from "./components/Loader/Loader";
import { GetCharacters } from "./components/Characters/GetCharacters";

const App = () => {
  /*se realiza una prueba, en un momento se procede a borrar la misma*/

  return (
    <div className="App">
      <header className="App-header">
        <GetCharacters/>
        {/* se deja el condicional del data.lenght por seguridad de carga*/}
        {/*en el momento en que data.length sea true, simplemente la condicion no se cumple y el loader pasa a false*/}
        {/*{loading && data.length === 0 ? (
          <div>
            <Loader font={80} />
          </div>
        ) : (
          <ul>
            {data.map((user: any) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}*/}
      </header>
    </div>
  );
};

export default App;
