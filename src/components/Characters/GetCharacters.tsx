import { useState, useEffect, FC } from "react";

import Card from "@mui/material/Card";
/*import CardHeader from "@mui/material/CardHeader";*/
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

//*material ui
import TextField from "@mui/material/TextField";

//!css
import "./getCharacter.css";

//!interfaces
import { GetMainCharacter } from "../../types/GetCharacterAll.services";

//!utils

import { getAllCharacter } from "../../helpers/urls";

//*atomos
import { DeleteBtn } from "../../atomos/DeleteBtn/DeleteBtn";

//* axios
import axios from "axios";

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
    <section className="my-6">
      <TextField
        id="outlined-basic"
        color="info"
        className="ml-auto mr-auto bg-white"
        placeholder="Find character"
        onChange={(e) => findCharacter(e.target.value)}
      />
      <div className="flex my-6 ml-auto mr-auto max-w-screen-lg justify-around flex-wrap gap-5">
        {dataCharacter.length > 0 ? (
          dataCharacter.map((el: any) => {
            return (
              <>
                <Card sx={{ maxWidth: 220 }} className="my-5 ml-auto mr-auto">
                  <CardContent>
                    <CardMedia
                      component="img"
                      height="800000"
                      image={el.image}
                      alt={el.name}
                      title={el.name}
                      style = {{margin: '15px auto'}}
                    />
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      
                    >
                      {el.name}
                    </Typography>
                    <Typography>Status: {el.status} </Typography>
                    <Typography>Specie : {el.species}</Typography>
                    <Typography
                      className="hover:shadow-sm hover:text-red-900 hover:cursor-pointer active:text-red-900"
                      style = {{margin: '20px auto auto auto'}}
                      onClick={() => deleteCharacter(el.id)}
                    >
                      <DeleteBtn className="hover:shadow-sm" />
                    </Typography>
                  </CardContent>
                </Card>
              </>
            );
          })
        ) : (
          <div className="my-6 ml-auto mr-auto">
            <h1 className="text-indigo-400">No hay personajes :)</h1>
          </div>
        )}

        <br />
        <br />
      </div>
    </section>
  );
};
