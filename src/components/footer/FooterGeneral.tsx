//!librerias

import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
//!components

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";

//!hooks
//!styles
//!css
//!firebase-
//!funciones

import { useStyles } from "./Footer.services";

//!variables u otros
//!types

export const FooterGeneral: FC = ({ ...props }) => {
  const navigate = useNavigate();
  const { rootBox, footerNav, footerLink } = useStyles();

  const content = {
    copy: "© 2022 rick-morty all rights reserved.",
    link1: <GoogleIcon />,
    link2: <GitHubIcon />,
    link3: <InstagramIcon />,
    link4: <LinkedInIcon />,
    link5: <ConnectWithoutContactIcon />,
    link6: <ChatRoundedIcon />,
    ...props,
  };

  return (
    <Container maxWidth="xl" style={{ padding: "10px" }}>
      <Box
        py={6}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        className={rootBox}
      >
        <Box component="nav" className={footerNav}>
          <Link
            title="Rick and Morty"
            href="https://es.wikipedia.org/wiki/Rick_y_Morty"
            variant="body1"
            className={footerLink}
            target="_blank"
          >
            {content["link1"]}
          </Link>
          <Link
            title="GitHub"
            href="https://github.com/JohnRodriguezM"
            variant="body1"
            className={footerLink}
            target="_blank"
          >
            {content["link2"]}
          </Link>
          <Link
            title="Instagram"
            href="https://www.instagram.com/john_rodriguez73/"
            variant="body1"
            className={footerLink}
            target="_blank"
          >
            {content["link3"]}
          </Link>
          <Link
            title="LinkedIn"
            href="https://www.linkedin.com/in/johnjrm/"
            variant="body1"
            className={footerLink}
            target="_blank"
          >
            {content["link4"]}
          </Link>
          <Link
            title="Contact"
            href="mailto:johnjairorodriguez384@gmail.com"
            variant="body1"
            className={footerLink}
            target="_blank"
          >
            {content["link5"]}
          </Link>
          <Link
            title="Let us know about you"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/home/know-you")}
            variant="body1"
            className={footerLink}
          >
            {content["link6"]}
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
