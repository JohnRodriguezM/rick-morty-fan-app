import React, { useState, FC } from "react";

//*importa la funcion de autenticación con email y password

import { createUserFirebaseEmail, auth } from "../firebase/main";

//*se importan elementos de material ui

import * as Yup from "yup";
import { Formik, Form } from "formik";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { InputText } from "../atomos/InputText/InputText";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required(` ⚠️ please, email`)
    .email(`well that's not an email`),
  password: Yup.string()
    .required()
    .min(5, ` ⚠️ pretty sure this will be hacked`),
});

const initialState = {
  email: "",
  password: "",
};

{
  /*organizar el formulario de tailwind con el FORMIK ---------------------- */
}

export const SignUpEmailPassword: FC = (props: any) => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);

  const handleSubmit = async (values: any): Promise<any> => {
    console.log("jajaja");
    setForm(values);
    await createUserFirebaseEmail(auth, values.email, values.password);
    console.log(auth);
    /*navigate("/");*/
    /*alert("exitosos");*/
  };

  return (
    <>
      <div
        className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-md
          rounded-3xl"
        
        style={{
          /* width: "95%",
        height: "450px",
        maxWidth: "400px",
        borderRadius: "40px",
        margin: "50px auto 10px auto",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",*/
          backgroundColor: "#fff",
        }}
      >
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-500">
              Sign up
            </h2>
          </div>

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
                <br />
                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    Sign up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <br />
      <Link to="/"> -- volver</Link> <br />
      {/*<Formik
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
            
            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>*/}
    </>
  );
};
