//!librerias
import React, { useEffect, FC, lazy, Suspense } from "react";
//* axios
import axios from "axios";
//!components

import { Loader } from "../../atomos/Loader/Loader";
import TextField from "@mui/material/TextField";

//!hooks
//!styles
//!css
//!firebase-
//!funciones
//!variables u otros

import { getAllCharacter } from "../../helpers/urls";

//!types

import {
  GetMainCharacter,
  Character,
} from "../../types/GetCharacterAll.services";

//! lazy loading component
const DataCharacterRender = lazy(() =>
  import("./DataCharacterRender").then((module) => ({
    default: module.DataCharacterRender,
  }))
);

export const GetCharacters: FC<GetMainCharacter> = ({
  dataCharacter,
  setDataCharacter,
  dataBackUpCharacter,
  setDataBackUpCharacter,
  deleteCharacter,
}: any) => {
  //!función para buscar el personaje de los main Characters
  const findCharacter = (searchInput: string) => {
    const arrayResults = dataBackUpCharacter.filter((el: Character) => {
      let text = el.name.toLowerCase();
      let searchedValue = searchInput.toLowerCase();
      if (text.includes(searchedValue)) return el;
    });
    setDataCharacter(arrayResults);
  };

  const getData = async (url: string) => {
    try {
      axios.get(url).then(({ data: { results } }) => {
        setDataCharacter(results);
        setDataBackUpCharacter(results);
      });
    } catch (err) {
      console.log(err);
    }
  };



  useEffect(() => {
    getData(getAllCharacter);
    return () => {
      setDataCharacter([]);
    };
  },[]);



  return (
    <section className="my-6 mx-auto">
      <TextField
        id="outlined"
        color="info"
        className="mx-auto bg-white"
        placeholder="Find character"
        onChange={({ target: { value } }) => findCharacter(value)}
      />
      <div className="flex flex-wrap gap-5 max-w-5xl mx-auto my-5">
        <Suspense fallback={<Loader />}>
          <DataCharacterRender {...{ dataCharacter, setDataCharacter }} />
        </Suspense>
      </div>
    </section>
  );
};
