//!librerias
import React, { useEffect, FC } from "react";
//* axios
import axios from "axios";
//!components

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
//*atomos
import { DeleteBtn } from "../../atomos/DeleteBtn/DeleteBtn";

//!hooks
//!styles
//!css
//!firebase-
//!funciones
//!variables u otros

import { getAllCharacter } from "../../helpers/urls";

//!types

import {
  GetMainCharacter,
} from "../../types/GetCharacterAll.services";

//*se importa el tipado para el componente
export const GetCharacters: FC<GetMainCharacter> = ({
  dataCharacter,
  setDataCharacter,
  setDataBackUpCharacter,
  deleteCharacter,
  findCharacter,
}: any) => {
  useEffect(() => {
    const getData = async (url: string) => {
      try {
        axios.get(url).then(({ data: { results } }) => {
          setDataCharacter(results);
          setDataBackUpCharacter(results);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getData(getAllCharacter);
  }, []);

  return (
    <section className="my-6 mx-auto">
      <TextField
        id="outlined-basic"
        color="info"
        className="mx-auto bg-white"
        placeholder="Find character"
        onChange={({target: {value}}) => findCharacter(value)}
      />
      <div className="flex my-6 mx-auto max-w-screen-lg justify-around flex-wrap gap-3">
        {dataCharacter.length > 0 ? (
          dataCharacter.map((el: any) => {
            const { id, name, image, status, species } = el;
            return (
              <>
                <Card sx={{ maxWidth: 220 }} className="my-5 mx-auto">
                  <CardContent>
                    <CardMedia
                      component="img"
                      height="800000"
                      image={image}
                      alt={name}
                      title={name}
                      className="my-4 mx-auto"
                    />
                    <Typography variant="subtitle1" color="text.primary">
                      {name}
                    </Typography>
                    <Typography>Status: {status} </Typography>
                    <Typography>Specie: {species}</Typography>
                    <Typography
                      className="hover:shadow-sm hover:text-red-900 hover:cursor-pointer active:text-red-900
                      mt-5 mr-auto ml-auto mb-auto"
                      onClick={() => deleteCharacter(id)}
                    >
                      <DeleteBtn className="hover:shadow-sm" />
                    </Typography>
                  </CardContent>
                </Card>
              </>
            );
          })
        ) : (
          <section className="my-6 mx-auto">
            <h1 className="text-indigo-400 text-2xl ml-2 mr-auto">
              No hay personajes :)
            </h1>
          </section>
        )}
      </div>
    </section>
  );
};
