import React, { FC } from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DeleteBtn } from "../../atomos/DeleteBtn/DeleteBtn";

interface DataCharacterRenderProps {
  dataCharacter: any;
  setDataCharacter: Function;
}

export const DataCharacterRender: FC<DataCharacterRenderProps> = ({
  dataCharacter,
  setDataCharacter,
  ...props
}) => {
   //! función para borrar personajes de los main Characters
  const deleteCharacter = (id: string | number) => {
    const dataFilter = dataCharacter.filter((el: any) => el.id !== id);
    setDataCharacter(dataFilter);
  };

  if (dataCharacter.length === 0) {
    return (
      <section className="flex justify-center items-center mx-auto my-6">
        <h1 className="text-2xl font-bold text-indigo-500">
          No hay personajes :)
        </h1>
      </section>
    );
  }

  return (
    <>
      {dataCharacter.map((el: any) => {
        const { id, name, image, status, species } = el;
        return (
          <Card sx={{ maxWidth: 220 }} className="my-5 mx-auto" key={id}>
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
        );
      })}
    </>
  );
};
