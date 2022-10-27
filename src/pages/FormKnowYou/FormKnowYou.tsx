//!librerias

import * as Yup from "yup";
import React, { useState, FC } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
//!components

import { InputText } from "../../atomos/InputText/InputText";

//!hooks
//!styles
//!css
//!firebase-

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../firebase/main";

//!funciones
//!variables u otros
//!types

interface sendInfo {
  name: string;
  lastname: string;
  age: number | null;
  phone: number | null;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required(`😎 Don't forget your name`),
  lastname: Yup.string().required(`😎 Don't forget your last name`),
  age: Yup.number().required(`😎 Don't forget your age`),
  phone: Yup.string().required(`😎 Don't forget your phone`),
});

const db = getFirestore(app);

export const FormKnowYou: FC = ({ ...props }: any) => {
  const navigate = useNavigate();
  const initialState: sendInfo = {
    name: "",
    lastname: "",
    age: null,
    phone: null,
  };

  const [form, setForm] = useState<sendInfo>(initialState);

  const handleSubmit = async ({
    name,
    lastname,
    age,
    phone,
  }: any): Promise<any> => {
    try {
      setForm({
        name,
        lastname,
        age,
        phone,
      });
      const docRef = await addDoc(collection(db, "users"), {
        name,
        lastname,
        age,
        phone,
      });
      console.log("Document written with ID: ", docRef.id);
      alert(`👍🏻 Good job ${name} ${lastname}`);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setForm(initialState);
    } finally {
      console.log("final");
    }
  };

  return (
    <>
      <section
        className="flex w-72 max-w-xl items-center justify-center mx-auto py-12 px-4
        sm:w-96 sm:px-6 mt-8 lg:px-8 sm:mt-8 sm:mx-autoW
          rounded-3xl bg-white shadow-xl border-2 border-gray-300 border-opacity-60"
      >
        <section className="w-96 max-w-md space-y-8">
          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, values, handleBlur, touched }) => (
              <Form noValidate>
                <InputText
                  name="name"
                  label="Name"
                  type="text"
                  placeholder="John"
                  value={values.name}
                  onBlur={handleBlur}
                />{" "}
                <br />
                <InputText
                  name="lastname"
                  label="Lastname"
                  type="text"
                  placeholder="Smith"
                  value={values.lastname}
                  onBlur={handleBlur}
                />{" "}
                <br />
                <InputText
                  name="age"
                  label="Age"
                  type="number"
                  placeholder="28"
                  value={values.age}
                  onBlur={handleBlur}
                />
                <br />
                <InputText
                  name="phone"
                  label="Phone Number"
                  type="number"
                  placeholder="+57 ( 000 ) 000 0000"
                  value={values.phone}
                  onBlur={handleBlur}
                />
                <br />
                <section>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-black bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                    "
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                    Send Data
                  </button>
                </section>{" "}
                <br />
              </Form>
            )}
          </Formik>
        </section>
      </section>
      <br />
      <br />
    </>
  );
};
