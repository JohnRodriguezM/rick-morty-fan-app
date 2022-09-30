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
        console.log(json);
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
        <li
          style={{
            margin: "0 auto",
            backgroundImage: `url(${infoCharacter.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100px",
            height: "100px",
          }}
        ></li>
        <li>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Tm7dFM_v57A" title="YouTube video player" /*frameborder="0"*/ allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" /*allowfullscreen*/></iframe>
        </li>
          <video src="https://youtu.be/Tm7dFM_v57A" controls></video>
      </ul>
    </div>
  );
};
