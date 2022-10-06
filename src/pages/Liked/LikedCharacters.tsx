import React, { useEffect } from "react";

import Card from "@mui/material/Card";
/*import CardHeader from "@mui/material/CardHeader";*/
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Link, useNavigate } from "react-router-dom";

export const LikedCharacters = ({ liked, setLiked, ...props }: any) => {
  const navigate = useNavigate();
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
  }, [liked, setLiked]);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "1rem",
        padding: "1rem",
      }}
    >
      {liked.length > 0 ? (
        liked.map((el: any) => {
          return (
            <Card sx={{ maxWidth: 190 }} style={{ margin: "10vh auto" }}>
              <CardContent>
                <CardMedia
                  component="img"
                  height="800000"
                  image={el.image}
                  alt={el.name}
                  title={el.name}
                />

                <Typography variant="subtitle1" color="text.primary">
                  Name: {el.name}
                </Typography>
                <Typography paragraph>Status: {el.status} </Typography>
                {/*<Typography paragraph></Typography>*/}
                <Typography paragraph>Specie : {el.species}</Typography>
                <Typography paragraph onClick={() => deleteLiked(el.id)}>
                  X
                </Typography>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <div>
          <h1>No hay personajes marcados como favorites</h1>
          <Link to="/home/character/1">Ver un personaje</Link>
        </div>
      )}

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
