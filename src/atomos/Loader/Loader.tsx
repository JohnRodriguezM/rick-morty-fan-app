//!esta super pendiente de usar para el suspense y con la carga de lazy loading

//!librerias

import React,{FC} from "react";

//!components

import CircularProgress from "@mui/material/CircularProgress";
//!hooks
//!styles

import "../../css/defaultCss/App.css";

//!firebase-
//!funciones
//!variables u otros
//!types

interface LoaderProps{
    size?:number
}

export const Loader:FC = ({...props}) => (
  <CircularProgress
    color="secondary"
    style={{ width: "60px", margin: "45px auto" }}
  />
);
