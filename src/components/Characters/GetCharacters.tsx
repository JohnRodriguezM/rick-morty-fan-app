import { useState, useEffect, FC } from "react";

//!css
import "./getCharacter.css";

//!funciones
import { fetchData } from "../../helpers/fetchData";

//!interfaces
import { GetCharacterIn } from "../../types/GetCharacterAll.services";

//!utils

import { getAllCharacter } from "../../helpers/urls";

//*atomos
import { DeleteBtn } from "../../atomos/DeleteBtn/DeleteBtn";

//* react-router-DOM
import { Link } from "react-router-dom";

const style = {
  display: "grid",
  gridTemplateColumns: `repeat(
    auto-fit,
    minmax(320px, 1fr)
  )`,
  /*gridTemplateColumns: "auto auto",*/
  gridGap: "1rem",
  /*border: "1px solid #ccc",
  padding: "15px"*/
};

export const GetCharacters: FC<GetCharacterIn> = ({
  setLocalStorage,
  dataCharacter,
  setDataCharacter,
  dataBackUpCharacter,
  setDataBackUpCharacter,
  deleteCharacter,
  findCharacter,
}) => {
  //* manejo de data provisional, manejando de manera visual momentanea
  /*  const [dataUI, setDataUI] = useState<any>(null); */
  useEffect(() => {
    fetchData(getAllCharacter, setLocalStorage, setDataBackUpCharacter);
  }, []);

  return (
    <div className="" style = {{marginTop: " 45px"}}>
      
        <input
          type="text"
          name=""
          id=""

          placeholder="Find character"
          onChange={(e) => {
            findCharacter(e.target.value);
          }}
        />
        <div style = {style}>
        {dataCharacter.length > 0 &&
          dataCharacter.map((el: any) => {
            const { id, image, name } = el;
            return (
              <div>
                <section key={id} className="section-character hover:shadow-lg">
                  <h4 className="text-2xl font-bold  text-red-600"> {/*underline*/}
                    {name}
                  </h4>
                  <img src={image} alt="" /> <br />
                  <button onClick={() => deleteCharacter(id)}>
                    <DeleteBtn />
                  </button>
                </section>
              </div>
            );
          })}
      </div>
    </div>
  );
};
