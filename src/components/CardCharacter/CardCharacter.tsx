import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
/*import CardHeader from "@mui/material/CardHeader";*/
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
/*import Avatar from "@mui/material/Avatar";*/
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
/*import { red } from "@mui/material/colors";*/
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
/*import MoreVertIcon from "@mui/icons-material/MoreVert";*/

import {ModalShare} from "../ShareView/ShareView";


import { Link, useNavigate } from "react-router-dom";

import { keyframes } from "@emotion/react";
/*
type AnimationProps = {
  animation: any;
};*/
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
  animation: any;
}

const animationValue = {
  animation: keyframes`
  0% {
    color: red;
    font-size: 1.5rem;
  }
  100% {
    color: none;
    /*transform: scale(1);*/
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
  animation: `${animation} 1.1s infinite`,
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
  cap,
  url,
}: any) => {
  const [share, setShare] = useState(false);

  const handleShare = () => {
    setShare(!share);
  };

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 360 }} style={{ margin: "10vh auto" }}>
      <CardContent>
        <CardMedia
          component="img"
          height="800000"
          image={image}
          alt={name}
          title={name}
        />

        <Typography variant="subtitle1" color="text.primary">
          Name: {name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className="active:text-red-800 hover:text-red active:scale-150" />
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
          <Typography paragraph>Status: {status} </Typography>
          {/*<Typography paragraph></Typography>*/}
          <Typography paragraph>Specie : {species}</Typography>
          <Typography>
            <div>
              {cap.map((el: any) => {
                return (
                  <section
                    className="grid grid-cols-2 gap-4 text-xs  "
                    style={{
                      /*display: "grid",*/
                      /* fontSize: "12px",*/
                      border: "1px solid #ccc",
                      /*gridTemplateColumns: `30% 68%`,*/
                      placeItems: "center",
                      /*gridGap: ".4rem",*/
                      padding: ".5rem",
                      /*margin: "25px auto"*/
                    }}
                  >
                    <button
                      className="bg-[#111138] 
                    text-white p-1 rounded-md
                    hover:scale-110 active:scale-110 "
                    >
                      <Link to={`/home/episode/${el.id}`}>{el.episode}</Link>
                    </button>
                    <p>{el.name}</p>
                  </section>
                );
              })}
            </div>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
