import React, { useState, useEffect, FC } from "react";

import { useParams } from "react-router-dom";

import { CardCharacter } from "../CardCharacter/CardCharacter";

import { Character } from "../../types/GetCharacterAll.services";

import axios from "axios";
interface ViewSpecificCharacterInterface {
  liked: Character[];
  setLiked: React.Dispatch<React.SetStateAction<Character[]>>;
}

export const ViewSpecificCharacter: FC<ViewSpecificCharacterInterface> = ({
  liked,
  setLiked,
}: any) => {
  const { Id } = useParams();

  const [infoCharacter, setInfoCharacter] = useState<Character>();
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

  const filterRepeatEpisode = async (array: string[]) => {
    return array.map((el: string) => {
      axios.get(el).then(({ data }: any) => {
        setCap((characters: Character[]) => {
          const unicos = characters.filter((el: any) => el.id !== data.id);
          return [...unicos, data];
        });
      });
    });
  };

  useEffect(() => {
    const getData = async (url: string) => {
      try {
        axios.get(url).then(({ data }: any) => {
          const { episode } = data;
          setInfoCharacter(data);
          filterRepeatEpisode(episode);
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
      <section className="my-0 mx-auto">
        <iframe
          className=" w-64 h-96  md:w-96 md:h-96 my-1 mx-auto"
          src="https://www.youtube.com/embed/Tm7dFM_v57A"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </section>
    </section>
  );
};
