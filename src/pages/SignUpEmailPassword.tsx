import React, { useState } from "react";

//*importa la funcion de autenticación con email y password

import { createUserFirebaseEmail, auth } from "../firebase/main";

//*se importan elementos de material ui

/*import Box from '@mui/material/Box';*/
import TextField from "@mui/material/TextField";

import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { InputText } from "../atomos/InputText/InputText";

/*const requiredFields: { [key: string]: any } = {};*/

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("please, email")
    .email("well that's not an email"),
  password: Yup.string().required().min(2, "pretty sure this will be hacked"),
});

const initialState = {
  email: "",
  password: "",
};

export const SignUpEmailPassword = (props: any) => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);

  const handleSubmit = async (values: any): Promise<any> => {
    console.log("jajaja");
    setForm(values);
    await createUserFirebaseEmail(auth, values.email, values.password);
    navigate("/");
    alert("exitosos");
  };

  return (
    <>
      <br />
      <Link to="/"> -- volver</Link> <br />
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, values, handleBlur, touched }) => (
          <Form noValidate>
            <InputText
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
              onBlur={handleBlur}
            />
            <InputText
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              onBlur={handleBlur}
            />
            {/* <ErrorMessage name={props.password} component="div" />*/}
            {/*{errors.password ? <p>{errors.password}</p> : null}*/}
            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
