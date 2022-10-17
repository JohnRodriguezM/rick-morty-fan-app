//!librerias

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//!components

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ModalShare } from "../ShareView/ShareView";
import { keyframes } from "@emotion/react";
import { Button } from "@mui/material";

//!hooks
//!styles
//!css
//!firebase-
//!funciones
//!variables u otros
//!types

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
  animation: any;
}

const animationValue = {
  animation: keyframes`
  0% {
    color: red;
    background-color:#D2CFCE  ;
  }
  100% {
    color: none;
    background-color:none;
  }
`,
  button: keyframes`
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`,
};

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand, animation }) => ({
  animation: expand ? "" : `${animation} 1.1s infinite`,
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CardCharacter = ({
  name,
  image,
  species,
  status,
  url,
  id,
  cap,
  tammanio,
  handleLikeCharacter,
  ...props
}: any) => {
  const navigate = useNavigate();
  const [share, setShare] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleShare = () => {
    setShare(!share);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Link
        to="/home/liked-characters"
        className="text-indigo-800 font-semibold my-4"
      >
        <Button
          className="btn btn-primary hover:shadow-sm"
          style={{ backgroundColor: "#5a67d8" }}
          variant="contained"
        >
          see characters with likes
        </Button>
      </Link>
      <Card sx={{ maxWidth: tammanio }} className="mt-10 mx-auto mb-4">
        <CardContent>
          <CardMedia
            component="img"
            height="800000"
            image={image}
            alt={name}
            title={name}
            className="mb-3"
          />
          <Typography variant="subtitle1" color="text.primary">
            Name: {name}
          </Typography>
          <Typography paragraph>Status: {status} </Typography>
          <Typography paragraph>Specie : {species}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              className="active:text-red-800 hover:text-red active:scale-150"
              onClick={() => {
                handleLikeCharacter(id);
                navigate("/home/liked-characters");
              }}
            />
          </IconButton>
          <IconButton aria-label="share" onClick={handleShare}>
            <ShareIcon />
            {share && <ModalShare url={url} />}
          </IconButton>
          <ExpandMore
            animation={animationValue.animation}
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>
              <div className="overflow-y-scroll max-h-80">
                {cap &&
                  cap.map((el: any) => {
                    const { name, episode, id } = el;
                    return (
                      <section
                        className="grid grid-cols-2 gap-4 text-xs p-2 border-2 border-gray-300 rounded-md shadow-md hover:shadow-lg
                    m-2
                    place-items-center
                    "
                      >
                        <button
                          className="bg-[#111138] 
                    text-white p-1 rounded-md
                    hover:scale-110 active:scale-110 "
                        >
                          <Link to={`/home/episode/${id}`}>{episode}</Link>
                        </button>
                        <p>{name}</p>
                      </section>
                    );
                  })}
              </div>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
