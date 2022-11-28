//!librerias

import React, { useEffect, useContext, FC } from "react";
import { Link } from "react-router-dom";

//!components

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { DeleteBtn } from "../../atomos/DeleteBtn/DeleteBtn";
import { LikedCharactersContext } from "../../context/LikedCharacters";

//!hooks
//!styles
//!css
//!firebase-
//!funciones
//!variables u otros
//!types

export const LikedCharacters: FC = (...props: any) => {
  const { likedCharacters, setLikedCharacters } = useContext(
    LikedCharactersContext
  );

  const deleteLiked = (id: string | number) => {
    const dataFilter = likedCharacters.filter((el: any) => el.id !== id);

    let confirm: any = window.confirm(
      "Are you sure you want to delete this character?"
    );
    if (confirm) {
      setLikedCharacters(dataFilter);
      window.localStorage.setItem(
        "likedCharacters",
        JSON.stringify(dataFilter)
      );
    }
  };

  return (
    <section
      className="my-12 mx-auto flex max-w-4xl flex-wrap justify-center
        gap-4"
    >
      {likedCharacters.length > 0 ? (
        likedCharacters.map((el: any) => {
          const { id, name, image, status, species } = el;
          return (
            <>
              <Card
                sx={{ maxWidth: 195 }}
                key={id}
                className="my-2 mx-auto p-2"
              >
                <Link to={`/home/character/${id}`} className="mr-40">
                  <ArrowBackIcon />
                </Link>
                <CardContent>
                  <CardMedia
                    className="rounded-2xl mb-1"
                    component="img"
                    height="800000"
                    image={image}
                    alt={name}
                    title={name}
                  />

                  <Typography variant="subtitle2" color="text.primary">
                    Name: {name}
                  </Typography>
                  <Typography variant="subtitle2">Status: {status} </Typography>
                  <Typography paragraph variant="subtitle2" className="mb-2">
                    Specie : {species}
                  </Typography>

                  <DeleteBtn
                    className="hover:shadow-sm"
                    onClick={() => deleteLiked(id)}
                  />
                </CardContent>
              </Card>
            </>
          );
        })
      ) : (
        <div className="flex flex-col items-center justify-center bg-white text-indigo-800 font-semibold p-4 rounded-lg shadow-md my-8">
          <Typography>
            There aren't favorite characters, do you want to select one?
          </Typography>
          <Link
            to="/home/character/1 "
            className="text-indigo-800 font-semibold my-4"
          >
            <Button
              className="btn btn-primary hover:shadow-sm"
              style={{ backgroundColor: "#5a67d8" }}
              variant="contained"
            >
              see main character
            </Button>
          </Link>
        </div>
      )}

      <br />
      <br />
      <br />
      <br />
    </section>
  );
};
