import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


import './Footer.css';

const useStyles = makeStyles((theme: any) => ({
  rootBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  footerNav: {
    color: "#fff",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginRight: "auto",
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "auto",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
  },
}));

export function Footer(props: any) {
  const classes = useStyles();

  const content = {
    copy: "© 2022 rick-morty all rights reserved.",
    link1: <GoogleIcon />,
    link2: <GitHubIcon />,
    link3: <InstagramIcon />,
    link4: <LinkedInIcon />,
    ...props.content,
  };

  return (
    <footer>
      <Container maxWidth="xl">
        <Box
          py={6}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={classes.rootBox}
        >
          <Box component="nav" className={classes.footerNav}>
            <Link
              href="https://es.wikipedia.org/wiki/Rick_y_Morty"
              variant="body1"
              className={classes.footerLink}
              target="_blank"
            >
              {content["link1"]}
            </Link>
            <Link
              href="https://github.com/JohnRodriguezM"
              variant="body1"
              className={classes.footerLink}
              target="_blank"
            >
              {content["link2"]}
            </Link>
            <Link
              href="https://www.instagram.com/john_rodriguez73/"
              variant="body1"
              className={classes.footerLink}
              target="_blank"
            >
              {content["link3"]}
            </Link>
            <Link
              href="https://www.linkedin.com/in/johnjrm/"
              variant="body1"
              className={classes.footerLink}
              target="_blank"
            >
              {content["link4"]}
            </Link>
          </Box>
          <Box mt={{ xs: 4, md: 0 }} ml="auto">
            <Typography
              variant="body1"
              color="inherit"
              style={{
                margin: "15px auto 10px 15px",
              }}
            >
              {content["copy"]}
            </Typography>
          </Box>
          {/*<Typography
           
            component="p"
            variant="caption"
            gutterBottom={false}
          >
            {content["copy"]}
          </Typography>*/}
        </Box>
      </Container>
    </footer>
  );
}
