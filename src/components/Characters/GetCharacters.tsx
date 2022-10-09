import { useState, useEffect, FC } from "react";

//!css
import "./getCharacter.css";

//!interfaces
import { GetMainCharacter } from "../../types/GetCharacterAll.services";

//!utils

import { getAllCharacter } from "../../helpers/urls";

//*atomos
import { DeleteBtn } from "../../atomos/DeleteBtn/DeleteBtn";

const style = {
  display: "grid",
  gridTemplateColumns: `repeat(
    auto-fit,
    minmax(320px, 1fr)
  )`,
  gridGap: "1rem",
};

export const GetCharacters: FC<GetMainCharacter> = ({
  dataCharacter,
  setDataCharacter,

  setDataBackUpCharacter,
  deleteCharacter,
  findCharacter,
}) => {
  //? useEffect para recuperar los mainCharacter with localStorage

  useEffect(() => {
    const getData = async (url: string) => {
      try {
        const res = await fetch(url);
        const {results}: any = await res.json();
        setDataCharacter(results);
        setDataBackUpCharacter(results);
      } catch (err) {
        console.log(err);
      }
    };
    getData(getAllCharacter);
  }, []);

  return (
    <div className="" style={{ marginTop: " 45px" }}>
      <input
        type="text"
        name=""
        id=""
        style={{ color: "red" }}
        placeholder="Find character"
        onChange={(e) => {
          findCharacter(e.target.value);
        }}
      />
      <div style={style}>
        {dataCharacter.length > 0 &&
          dataCharacter.map((el: any) => {
            const { id, image, name } = el;
            return (
              <div>
                <section key={id} className="section-character hover:shadow-lg">
                  <h4 className="text-2xl font-bold  text-red-600">{name}</h4>
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
