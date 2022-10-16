import React, {FC} from 'react'


import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DeleteBtn } from "../../atomos/DeleteBtn/DeleteBtn";

interface DataCharacterRenderProps {
  dataCharacter: any;
  deleteCharacter: any;
}


export const DataCharacterRender: FC<DataCharacterRenderProps> = ({
  dataCharacter,
  deleteCharacter,
  ...props
}) => {
  return (
    <>
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
    </>
  )
}
