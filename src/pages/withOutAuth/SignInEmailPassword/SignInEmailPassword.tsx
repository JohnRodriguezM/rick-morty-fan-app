import * as React from "react";
import { useState, useEffect, FC } from "react";

import * as Yup from "yup";
import { Formik, Form } from "formik";

import { allowAccessToUserEmailPassword, auth } from "../../../firebase/main";

import { useNavigate } from "react-router-dom";
import { InputText } from "../../../atomos/InputText/InputText";

import Button from "@mui/material/Button";


import {SignValidation} from '../../../types/GetCharacterAll.services'


const initialState: SignValidation = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required(` ⚠️ please, email`)
    .email(`well that's not an email`),
  password: Yup.string().required(` ⚠️ Don't forget, password`),
});

export const SignInEmailPassword: FC = (props: any): any => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);

  const handleSubmit = async (values: any): Promise<any> => {
    setForm(values);

    await allowAccessToUserEmailPassword(
      auth,
      values.email,
      values.password
    ).then((user: any) => {
      user ? navigate("/home") : alert("Verifica tu correo y contraseña");
    });
  };
  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      
      {({ errors, values, handleBlur, touched }) => (
        
        <Form noValidate>
         <p style = {{color: '#000'}}> --------------  o   --------------</p>

          <InputText
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
            onBlur={handleBlur}
          />{" "}
          <br />
          <InputText
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
            onBlur={handleBlur}
          />
          <div
            style={{ display: "flex", justifyContent: "center", gap: "15px" }}
          >
            <Button
              variant="contained"
              type="submit"
              /*endIcon={<SendIcon />}*/
              style={{ marginTop: "10px", backgroundColor: "#b535f6" }}
            >
              Sign In
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
