import { useState, useEffect, FC, ReactComponentElement } from "react";

//!css
import "../../css/defaultCss/getCharacter.css";

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

export const GetCharacters: FC<GetCharacterIn> = ({
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
    fetchData(getAllCharacter, setDataCharacter, setDataBackUpCharacter);
  }, []);

  return (
    <div style={{ padding: "15px" }} className="">
      <>
        <input
          type="text"
          name=""
          id=""
          placeholder="Find character"
          onChange={(e) => {
            findCharacter(e.target.value);
          }}
        />

        {dataCharacter.length > 0 &&
          dataCharacter.map((el: any) => {
            const { id, image, name } = el;
            return (
              <>
                <article
                  key={name}
                  className="section-character hover:shadow-lg"
                >
                  <h1 className="text-3xl font-bold underline text-red-600">
                    {el.name}
                  </h1>
                  <img src={image} alt="" /> <br />
                  <button onClick={() => deleteCharacter(id)}>
                    <DeleteBtn />
                  </button>{" "}
                  <br />
                  <br />
                </article>{" "}
                <br />
                <br />
              </>
            );
          })}
      </>
      <Link to = "/character/" >Ir a characters</Link>
    </div>
  );
};

/*  const datos = [
    { name: "john", id: 1 },
    { name: "pepe", id: 2 },
    { name: "pae", id: 3 },
    {name: 'carlos', id: 4 },
  ];*/
