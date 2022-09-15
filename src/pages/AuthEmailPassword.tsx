import React, { useState } from "react";


//*importa la funcion de autenticación con email y password

import {createUserFirebaseEmail, auth} from '../firebase/main'

export const AuthEmailPassword = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <br /><br />
      <h1>sign up AuthEmailPassword</h1>
      <form onSubmit={(e)=> {
        e.preventDefault()
        createUserFirebaseEmail(auth, form.email, form.password)
      }}>
        <input type="email" name="email" onChange={handleChange} value = {form.email} placeholder="example@gmail.com"/> <br /> <br />
        <input type="password" name="password" onChange={handleChange} value = {form.password} placeholder = ".."/> <br /> <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
