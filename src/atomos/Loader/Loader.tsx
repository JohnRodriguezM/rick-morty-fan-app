//!esta super pendiente de usar para el suspense y con la carga de lazy loading

//!librerias

import React from "react";

//!components

import LoopIcon from "@mui/icons-material/Loop";

//!hooks
//!styles
//!firebase-
//!funciones
//!variables u otros
//!types

export const Loader = (props: any) => {
  return (
    <>
      <LoopIcon
        className="App-logo"
        sx={{ fontSize: props.font ? props.font : "10" }}
      />
    </>
  );
};
