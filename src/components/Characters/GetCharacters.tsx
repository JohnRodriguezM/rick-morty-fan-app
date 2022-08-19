/*import { useState, useEffect } from "react";*/

import { useFetch } from "../../hooks/useFetch";

export const GetCharacters = () => {
  const [dataA, loadingA, errorA, setDataA] = useFetch("https://rickandmortyapi.com/api/character");
  console.log(dataA.results)
  return (
    <div>
      hola
    </div>
  );
};
