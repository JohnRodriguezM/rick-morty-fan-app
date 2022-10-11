import React, { useState, FC } from "react";

//*importa la funcion de autenticación con email y password

import { createUserFirebaseEmail, auth } from "../../../firebase/main";

//*se importan elementos para los formularios
import * as Yup from "yup";
import { Formik, Form } from "formik";

//*se importan elemntos de react-router-dom
import { Link, useNavigate } from "react-router-dom";

//*se importa componente de imput con useField para que funcione con formik
import { InputText } from "../../../atomos/InputText/InputText";

//*se importa button de material ui
import Button from "@mui/material/Button";

import { SignValidation } from "../../../types/GetCharacterAll.services";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required(` ⚠️ please, email`)
    .email(`well that's not an email`),
  password: Yup.string()
    .required()
    .min(5, ` ⚠️ pretty sure this will be hacked`),
});

export const SignUpEmailPassword = (props: any) => {
  const navigate = useNavigate();

  const initialState: SignValidation = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);

  const handleSubmit = async (values: any): Promise<any> => {
    setForm(values);
    await createUserFirebaseEmail(auth, values.email, values.password).then(
      (res) => {
        if (res?.user.email) {
          alert(`bienvendio ${res?.user.email}`);
          navigate("/");
        }
      }
    );
  };

  return (
    <>
      <section
        className="flex w-72 max-w-xl items-center justify-center mx-auto py-12 px-4
        sm:w-96 sm:px-6 mt-8 lg:px-8 sm:mt-8 sm:mx-auto  
          rounded-3xl bg-white shadow-xl border-2 border-gray-300 border-opacity-60"
      >
        <section className="w-96 max-w-md space-y-8">
          <section>
            <img
              className="mx-auto  w-40 rounded-full"
              src={require("../../../assets/download.gif")}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-violet-800">
              Sign up
            </h2>
          </section>

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
                <section>
                  <button
                    style={{
                      background:
                        "linear-gradient(rgba(116, 9, 121, 1), rgba(185, 8, 246, 1), rgba(91, 28, 230, 1))",
                    }}
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white
                    "
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-white"
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
                </section>
              </Form>
            )}
          </Formik>
        </section>
      </section>
      <br />
      <Link to="/">
        <Button
          style={{
            background:
              "linear-gradient(rgba(116, 9, 121, 1), rgba(185, 8, 246, 1), rgba(91, 28, 230, 1))",
            color: "#fff",
          }}
          variant="text"
        >
          Volver
        </Button>
      </Link>
      <br />
    </>
  );
};
