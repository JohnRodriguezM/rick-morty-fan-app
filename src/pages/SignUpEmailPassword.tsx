import React, { useState } from "react";

//*importa la funcion de autenticación con email y password

import { createUserFirebaseEmail, auth } from "../firebase/main";

//*se importan elementos de material ui

/*import Box from '@mui/material/Box';*/
import TextField from "@mui/material/TextField";

import * as Yup from "yup";
import { Formik, Form } from "formik";

import { InputText } from "../atomos/InputText/InputText";

const requiredFields: { [key: string]: any } = {};

const validationSchema = Yup.object({ ...requiredFields });

const initialState = {
  email: "",
  password: "",
};

export const SignUpEmailPassword = () => {
  const [form, setForm] = useState(initialState);

  const handleSubmit = (values: any) => {
    setForm(values);
    createUserFirebaseEmail(auth, values.email, values.password);
  };

  const validation = (values: any) => {
    let errors = {
      email: "",
      password: "",
    };

    if (!values.email) {
      errors.email = "Name is required!";
    }
    if ( values.password.length < 6) {
      errors.password = "Name has to be 1 character at less!";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validate={validation}
    >
      {({ errors, values }) => (
        <Form>
          <InputText
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
            onBlur = {validation}
          />
          {errors.email ? <div>{errors.email}</div> : null}
          <InputText
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
          />
          {errors.password ? <div>{errors.password}</div> : null}
          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};
