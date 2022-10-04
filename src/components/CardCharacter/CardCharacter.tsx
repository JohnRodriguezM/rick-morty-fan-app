import React,{useState} from "react";
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

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CardCharacter = (props:any) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style = {{margin: '25px auto'}}>
      <CardContent>
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt="Paella dish"
        />

        <Typography variant="body2" color="text.secondary">
          {props.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className = "active:text-red-800 hover:text-red active:scale-150"/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
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
          <Typography paragraph>Status: </Typography>
          <Typography paragraph>
            {props.status}
          </Typography>
          <Typography paragraph>
           {props.species}
          </Typography>
          <Typography paragraph>
            at don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};