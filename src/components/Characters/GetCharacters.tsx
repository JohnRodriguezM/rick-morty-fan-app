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
        const res = await fetch(url);
        const { results }: any = await res.json();
        setDataCharacter(results);
        setDataBackUpCharacter(results);
      } catch (err) {
        console.log(err);
      }
    };
    getData(getAllCharacter);
  }, []);

  return (
    <>
      <TextField
        id="outlined-basic"
        color="info"
        style={{
          color: "red",
          margin: "35px auto 15px auto",
          backgroundColor: "white",
        }}
        placeholder="Find character"
        onChange={(e) => {
          findCharacter(e.target.value);
        }}
      />
      <div
        className="hover:shadow-lg"
        style={{
          margin: "5vh auto",
          display: "flex",
          maxWidth: "1200px",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: " 15px",
        }}
      >
        {dataCharacter.length > 0 ? (
          dataCharacter.map((el: any) => {
            return (
              <>
                <Card sx={{ maxWidth: 220 }} style={{ margin: "2vh auto" }}>
                  <CardContent>
                    <CardMedia
                      component="img"
                      height="800000"
                      image={el.image}
                      alt={el.name}
                      title={el.name}
                    />
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      style={{ marginTop: "15px" }}
                    >
                      {el.name}
                    </Typography>
                    <Typography>Status: {el.status} </Typography>
                    <Typography>Specie : {el.species}</Typography>
                    <Typography
                      className="hover:shadow-lg"
                      style={{ marginTop: "15px" }}
                      onClick={() => deleteCharacter(el.id)}
                    >
                      <DeleteBtn />
                    </Typography>
                  </CardContent>
                </Card>
              </>
            );
          })
        ) : (
          <div>
            <h1>No hay personajes en el momento :)</h1>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              refresh
            </button>
          </div>
        )}

        <br />
        <br />
      </div>
    </>
  );
};
