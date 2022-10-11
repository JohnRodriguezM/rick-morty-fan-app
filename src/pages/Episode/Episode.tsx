import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import {
  Character,
  EpisodeInterface,
} from "../../types/GetCharacterAll.services";

export const Episode = () => {
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
  const [characters, setCharacters] = useState(dbCharacters);

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
          //! datos del episode como tal
          setEpisodeData(data);
          //!datos de los characters del episodio de la petición anterior
          filterRepeatEpisode(data.characters);
        });
      } catch (err: unknown) {
        console.log(err);
      }
    };
    getData(`https://rickandmortyapi.com/api/episode/${Id}`);
  }, [Id]);

  return (
    <section className="max-w-screen-lg my-6 ml-auto mr-auto">
      {/*información del capítulo como tal*/}
      <section className="my-6">
        <Typography>
          Episode: <b>{episodeData.name}</b>
        </Typography>
        <Typography>
          Air date: <b>{episodeData.air_date}</b>
        </Typography>
        <Typography>
          Season: <b>{episodeData.episode}</b>
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
        {characters.map((el: any, index: number) => (
          <Link to={`/home/character/${el.id}`}>
            <Card
              sx={{ maxWidth: 200 }}
              key={el.id}
              className="flex flex-col justify-center my-6 ml-auto mr-auto items-center"
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
