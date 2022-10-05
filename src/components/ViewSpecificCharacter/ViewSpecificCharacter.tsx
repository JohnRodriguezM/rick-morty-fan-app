import React, { useState, useEffect } from "react";

import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

import { useParams } from "react-router-dom";
import { fetchData } from "../../helpers/fetchData";

import { CardCharacter } from "../CardCharacter/CardCharacter";

export const ViewSpecificCharacter = (props: any) => {
  /* const { dataSpecifCharacter } = props;*/

  const { Id } = useParams();
  /* console.log(params);*/

  const [infoCharacter, setInfoCharacter] = useState<any>([]);
  const [cap, setCap] = useState<any>([]);
  useEffect(() => {
    const getData = async (url: string) => {
      try {
        const res = await fetch(url);
        const json: any = await res.json();
        console.log(json);
        setInfoCharacter(json);

        json.episode.map((el: any, index: number) => {
          fetch(el)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setCap((characters: any) => {
                const unicos = characters.filter(
                  (el: any) => el.id !== data.id
                );
                return [...unicos, data];
              });
            });
        });
      } catch (err) {
        console.log(err);
      }
    };
    getData(`https://rickandmortyapi.com/api/character/${Id}`);
  }, [Id]);
  return (
    <div
      className="grid md:grid-cols-2 gap-1 md:gap-5 
      flex-start
      place-items-center md:justify-center"
    >
      <section>
        <CardCharacter {...infoCharacter} cap={cap} />
      </section>

      <Card sx={{ maxWidth: 500 }} style={{ margin: "10vh auto" }}>
        <iframe
          className="w-full h-full md:h-96"
          src="https://www.youtube.com/embed/Tm7dFM_v57A"
          title="YouTube video player"
          /*frameborder="0"*/ allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" /*allowfullscreen*/
        ></iframe>
      </Card>
      {/*<video src="https://youtu.be/Tm7dFM_v57A" controls></video>*/}
    </div>
  );
};
