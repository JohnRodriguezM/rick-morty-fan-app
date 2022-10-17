//!librerias

import React, { FC } from "react";
import { Link } from "react-router-dom";

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
} from "../../types/GetCharacterAll.services";

interface EpisodeCharacterDataRenderProps {
  characters: Character[];
}

export const EpisodeCharacterDataRender: FC<
  EpisodeCharacterDataRenderProps
> = ({ characters, ...props }) => {
  return (
    <>
      {characters.map((el: Character, index: number) => (
        <Link to={`/home/character/${el.id}`} key = {index}>
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
    </>
  );
};
