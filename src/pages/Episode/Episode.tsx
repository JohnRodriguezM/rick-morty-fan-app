//!librerias

import React, { useEffect, useState, FC, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//!components

import Typography from "@mui/material/Typography";
import { Loader } from "../../atomos/Loader/Loader";

//!hooks
//!styles
//!css
//!firebase-
//!funciones
//!variables u otros
//!types

import {
  Character,
  EpisodeInterface,
} from "../../types/GetCharacterAll.services";

//!lazy loading components
const EpisodeCharacterDataRender = lazy(() =>
  import("./EpisodeCharacterDataRender").then((module) => ({
    default: module.EpisodeCharacterDataRender,
  }))
);

export const Episode: FC = ({ ...props }) => {
  //? se obtiene id como parámetro para guiar la ruta
  const { Id } = useParams();

  //? initial value state characters
  const dbCharacters: Character[] = [];
  //? initial value state datos
  const dbEpisode: EpisodeInterface = {
    air_date: "",
    characters: [],
    created: "",
    episode: "",
    id: "",
    name: "",
    url: "",
  };

  const [episodeData, setEpisodeData] = useState(dbEpisode);
  const [characters, setCharacters] = useState<Character[]>(dbCharacters);

  //? función que elimina elementos repetidos en la petición de los personajes del epidosodio
  const filterRepeatEpisode = async (array: string[]) => {
    return array.map((el: string) => {
      axios.get(el).then(({ data }: any) => {
        setCharacters((characters: Character[]) => {
          const uniques = characters.filter((el: any) => el.id !== data.id);
          return [...uniques, data];
        });
      });
    });
  };
  const getData = async (url: string) => {
    try {
      axios.get(url).then(({ data }: any) => {
        const { characters } = data;
        //! datos del episode como tal
        setEpisodeData(data);
        //!datos de los characters del episodio de la petición anterior
        filterRepeatEpisode(characters);
      });
    } catch (err: unknown) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData(`https://rickandmortyapi.com/api/episode/${Id}`);
    return () => {
      setEpisodeData(dbEpisode);
      setCharacters(dbCharacters);
    };
  }, [Id]);

  const { air_date, episode, name } = episodeData;
  return (
    <section className="max-w-screen-lg my-6 ml-auto mr-auto">
      {/*información del capítulo como tal*/}
      <section className="my-6">
        <Typography>
          Episode: <b>{name}</b>
        </Typography>
        <Typography>
          Air date: <b>{air_date}</b>
        </Typography>
        <Typography>
          Season and episode number: <b>{episode}</b>
        </Typography>
      </section>
      <ul
        className="grid gap-4 list-none"
        style={{
          gridTemplateColumns: `repeat(
            auto-fit,
            minmax(200px, 1fr)
          )`,
        }}
      >
        {/*render de los personajes del episodio*/}
        <Suspense fallback={<Loader />}>
          <EpisodeCharacterDataRender characters={characters} />
        </Suspense>
      </ul>
      <br />
    </section>
  );
};
