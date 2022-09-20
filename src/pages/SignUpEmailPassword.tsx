import React, { useState } from "react";

//*importa la funcion de autenticación con email y password

import { createUserFirebaseEmail, auth } from "../firebase/main";

//*se importan elementos de material ui

/*import Box from '@mui/material/Box';*/
import TextField from "@mui/material/TextField";

export const SignUpEmailPassword = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <br />
      <br />
      <h1>sign up AuthEmailPassword</h1> <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createUserFirebaseEmail(auth, form.email, form.password);
        }}
      >
        {/*<input type="email" name="email" onChange={handleChange} value = {form.email} placeholder="example@gmail.com"/> */}
        <TextField
          type="email"
          id="outlined-basic"
          label="email"
          variant="outlined"
          onChange={handleChange}
          value={form.email}
          name="email"
        />
        <br /> <br />
        <TextField
          type="password"
          id="outlined-basic"
          label="password"
          variant="outlined"
          onChange={handleChange}
          value={form.password}
          name="password"
        />
        {/*<input type="password" name="password" onChange={handleChange} value = {form.password} placeholder = ".."/>*/}{" "}
        <br /> <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
