//!librerias

import React, { useEffect, useState, FC } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

//!components

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
    getData(`https://rickandmortyapi.com/api/episode/${Id}`);
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
        {/*mapeo de los characters que se trane luego del fetch interno que se realiza por el string de cada episodio*/}
        {characters.map((el: Character, index: number) => (
          <Link to={`/home/character/${el.id}`}>
            <Card
              sx={{ maxWidth: 200 }}
              key={el.id}
              className="flex flex-col justify-center my-6 ml-auto mr-auto items-center hover:transform hover:scale-110"
            >
              <CardMedia component="img" image={el.image} alt={el.name} />
              <Typography>{el.name}</Typography>
            </Card>
          </Link>
        ))}
      </ul>
      <br />
    </section>
  );
};
