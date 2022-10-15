//!librerias

import React, { FC } from "react";
import { Link } from "react-router-dom";

//!components

import { Box, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";

//!hooks
//!styles
//!css
//!firebase-
//!funciones
//!variables u otros

const primary = purple[500]; // #f44336

//!types

export const Page404: FC = ({ ...props }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Link to="/home" className="my-4">
        <Button variant="contained">Back Home</Button>
      </Link>
    </Box>
  );
};
