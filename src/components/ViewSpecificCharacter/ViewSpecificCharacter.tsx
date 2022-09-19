import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { fetchData } from "../../helpers/fetchData";

export const ViewSpecificCharacter = (props: any) => {
 /* const { dataSpecifCharacter } = props;*/

  const {Id} = useParams();
 /* console.log(params);*/

  const [infoCharacter, setInfoCharacter] = useState<any>([]);
  useEffect(() => {
    const getData = async (url: string) => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setInfoCharacter(json);
      } catch (err) {
        console.log(err);
      }
    };
    getData(`https://rickandmortyapi.com/api/character/${Id}`);
  }, [Id]);
  return (
    <div>
      <ul>
        <li>{infoCharacter.name}</li>
        <li>{infoCharacter.status}</li>
        <li>{infoCharacter.species}</li>
        <li>{infoCharacter.id}</li>
      </ul>
    </div>
  );
};
