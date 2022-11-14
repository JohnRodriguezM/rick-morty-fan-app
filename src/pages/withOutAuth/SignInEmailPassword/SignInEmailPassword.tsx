//!librerias

import React, { useState, useEffect, FC } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
//!components

import { InputText } from "../../../atomos/InputText/InputText";


//!hooks
//!styles
//!css
//!firebase-

import { allowAccessToUserEmailPassword, auth } from "../../../firebase/main";

//!funciones
//!variables u otros
//!types

import { SignValidation } from "../../../types/GetCharacterAll.services";

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
  const [form, setForm] = useState<SignValidation>(initialState);

  const handleSubmit = async ({ email, password }: any): Promise<any> => {
    setForm({
      email,
      password,
    });
    await allowAccessToUserEmailPassword(auth, email, password).then(
      (user: any) => {
        user ? navigate("/home") : alert("Verifica tu correo y contraseña");
      }
    );
  };
  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, values, handleBlur, touched }) => (
        <Form noValidate>
          <p className="text-black my-1">
            {" "}
            <b> -------------- o -------------- </b>
          </p>
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
          <section className="flex justify-center items-center gap-4">
            <Button
              type="submit"
              shadow
              color="secondary"
              style={{ marginTop: "12px", backgroundColor: "#b535f6", borderRadius: "0.5rem"}}
            >
              Sign In
            </Button>
          </section>
        </Form>
      )}
    </Formik>
  );
};
