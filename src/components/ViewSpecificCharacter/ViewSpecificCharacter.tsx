import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { CardCharacter } from "../CardCharacter/CardCharacter";

export const ViewSpecificCharacter = ({ liked, setLiked }: any) => {
  const { Id } = useParams();

  const [infoCharacter, setInfoCharacter] = useState<any>([]);
  const [cap, setCap] = useState<any>([]);

  const handleLikeCharacter = (id: string | number) => {
    const dataFilter = liked.filter((el: any) => el.id !== id);
    setLiked([...dataFilter, infoCharacter]);

    window.localStorage.setItem(
      "likedCharacters",
      JSON.stringify([...dataFilter, infoCharacter])
    );
  };

  //!se hace una petición aparte con un nuevo estado para el personaje indiviual, de esta manera no se genera confusión con la petición general de los personajes en getCharacters
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
    <section
      className="md:grid md:grid-cols-2 gap-1 md:gap-5
    md:place-items-center md:place-content-center m-7"
    >
      <section>
        <CardCharacter
          {...infoCharacter}
          cap={cap}
          handleLikeCharacter={handleLikeCharacter}
          tammanio={325}
          liked={liked}
          setLiked={setLiked}
        />
      </section>
      <section style={{ margin: "0 15px" }}>
        <iframe
          style={{ margin: "0 auto" }}
          className=" w-64 h-96  md:w-96 md:h-96"
          src="https://www.youtube.com/embed/Tm7dFM_v57A"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </section>
    </section>
  );
};
