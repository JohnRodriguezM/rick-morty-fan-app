import React, { useEffect } from "react";

import Card from "@mui/material/Card";
/*import CardHeader from "@mui/material/CardHeader";*/
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";



//*se importa el tipado para el componente
export const LikedCharacters = ({ liked, setLiked, ...props }: any) => {



  const deleteLiked = (id: string | number) => {
    const dataFilter = liked.filter((el: any) => el.id !== id);

    let confirm: any = window.confirm(
      "Are you sure you want to delete this character?"
    );

    if (confirm) {
      setLiked(dataFilter);
      window.localStorage.setItem(
        "likedCharacters",
        JSON.stringify(dataFilter)
      );
    }
  };

  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("likedCharacters")!);
    console.log(data);
    setLiked(data);
  }, []);
  return (
    <div
      style={{
        margin: "5vh auto",
        display: "flex",
        maxWidth: "900px",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: " 15px"
      }}
    >
      {liked.length > 0 ? (
        liked.map((el: any) => {
          return (
            <>
              <Card sx={{ maxWidth: 190 }} style={{ margin: "2vh auto" }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="800000"
                    image={el.image}
                    alt={el.name}
                    title={el.name}
                  />
                  <Link to={`/home/character/${el.id}`}>
                    Back to the character
                  </Link>
                  <Typography variant="subtitle1" color="text.primary">
                    Name: {el.name}
                  </Typography>
                  <Typography paragraph>Status: {el.status} </Typography>
                  <Typography paragraph>Specie : {el.species}</Typography>
                  <Typography paragraph onClick={() => deleteLiked(el.id)}>
                    X
                  </Typography>
                </CardContent>
              </Card>
            </>
          );
        })
      ) : (
        <div>
          <h1>No hay personajes marcados como favorites</h1>
          <Link to="/home/character/1">Ver el personaje #1</Link>
        </div>
      )}

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
