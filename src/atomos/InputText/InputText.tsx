//!librerias
import {FC} from 'react'

//!components

import TextField from "@mui/material/TextField";

//!hooks

import { useField } from "formik";

//!styles
//!firebase-
//!funciones
//!variables u otros
//!types

export const InputText  = (props:any) => {
  const [field, meta] = useField(props);
  return (
    <>
      {" "}
      <section style={{ width: "100%", color: "#111138" }}>
        <TextField
          {...field}
          {...props}
          className="w-full text-white"
          style={{ borderColor: "#fff" }}
        />
        {meta.touched && meta.error && <p className="text-xs">{meta.error}</p>}
      </section>
    </>
  );
};
