//!librerias

import React, { useState, useEffect, FC, lazy, Suspense,useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//!components

import { VideoSectionRickAndMorty } from "./VideoSectionRickAndMorty";
import { Loader } from "../../atomos/Loader/Loader";
//!hooks
//!styles

import "../../css/defaultCss/App.css";

//!firebase-
//!funciones
//!variables u otros
//!types

import {
  Character,
  EpisodeInterface,
} from "../../types/GetCharacterAll.services";
interface ViewSpecificCharacterInterface {
  liked: Character[];
  setLiked: React.Dispatch<React.SetStateAction<Character[]>>;
}

//*lazy loading components
const CardCharacter = lazy(() =>
  import("../CardCharacter/CardCharacter").then((module) => ({
    default: module.CardCharacter,
  }))
);

export const ViewSpecificCharacter: FC<ViewSpecificCharacterInterface> = ({
  liked,
  setLiked,
}: any) => {
  const { Id } = useParams();

  const [infoCharacter, setInfoCharacter] = useState<Character[]>([]);
  const [cap, setCap] = useState<EpisodeInterface[]>([]);

  //* mark character as liked
  const handleLikeCharacter = (id: string | number) => {
    const dataFilter = liked.filter((el: any) => el.id !== id);
    setLiked([...dataFilter, infoCharacter]);

    window.localStorage.setItem(
      "likedCharacters",
      JSON.stringify([...dataFilter, infoCharacter])
    );
  };

  //!se hace una petición aparte con un nuevo estado para el personaje indiviual, de esta manera no se genera confusión con la petición general de los personajes en getCharacters

  //*this function allow filter the episodes of the character
  const filterRepeatEpisode = async (array: string[]) => {
    return array.map((el: string) => {
      axios.get(el).then(({ data }: any) => {
        setCap((characters: any) => {
          const unicos = characters.filter((el: any) => el.id !== data.id);
          return [...unicos, data];
        });
      });
    });
  };
  //*fetch data API indiviual character, and filter the episodes array to assign a new state with the episodes of the character in the below part of the box container
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

  useLayoutEffect(() => {
    getData(`https://rickandmortyapi.com/api/character/${Id}`);
    return () => {
      setInfoCharacter([]);
      setCap([]);
    };
  }, [Id]);

  return (
    <Suspense fallback={<Loader />}>
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
        <VideoSectionRickAndMorty />
      </section>
    </Suspense>
  );
};
