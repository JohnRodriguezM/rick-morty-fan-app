import React from "react";
import { HeaderWithOutAuth } from "../../atomos/Header/HeaderWithOutAuth";

import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

import { login, loginGitHub } from "../../firebase/main";

import { useNavigate } from "react-router-dom";
import { SignInEmailPassword } from "../SignInEmailPassword";

import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import {Footer} from "../../components/footer/Footer"

export const WithOutAuth = (props: any) => {
  const navigate = useNavigate();

  const setLocalStorageGoogle = (value: any) => {
    //* actualizo los dos estados identicos que tengo para poder guardarlos y usarlos ambos desde local storage
    props.setGoogleAuth(value);
    /*setDataBackUpCharacter(value)*/
    navigate("/home");
    window.localStorage.setItem("googleToken", JSON.stringify(value));
  };

  const setLocalStorageGitHub = (value: any) => {
    //* actualizo los dos estados identicos que tengo para poder guardarlos y usarlos ambos desde local storage
    props.setGhAutg(value);
    /*setDataBackUpCharacter(value)*/
    navigate("/home");
    window.localStorage.setItem("githubToken", JSON.stringify(value));
  };

  return (
    <section>
      <HeaderWithOutAuth />
      <div
        style={{
          width: "80%",
          maxWidth: "380px",
          borderRadius: "40px",
          margin: "25px auto",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          /*height: "100vh",
        width: "100vw"*/
          backgroundColor: "#fff",
        }}
      >

     {/*   <button
          style={{
            width: "77%",
            marginTop: "30px",
            backgroundColor: "#787a91",
            padding: "10px",
            borderRadius: "10px",
            color: "white",
            border: "none",
          }}
        >
          <Link to = "/signUp">
          Sign up
          </Link>
          
        </button>{" "}*/}
        <br />
        <button
          onClick={() => {
            login(setLocalStorageGoogle);
          }}
          style={{
            width: "77%",
           /* marginTop: "4px",*/
            backgroundColor: "#0f044c",
            padding: "10px",
            borderRadius: "10px",
            color: "white",
            border: "none",
          }}
        >
          Login with google <GoogleIcon />
        </button>{" "}
        <br />
        <button
          onClick={() => {
            loginGitHub(setLocalStorageGitHub);
          }}
          style={{
            width: "77%",
            /*marginTop: "4px",*/
            backgroundColor: "#141e61",
            padding: "10px",
            borderRadius: "10px",
            color: "white",
            border: "none",
          }}
        >
          Login with Github <GitHubIcon />
        </button>{" "}
        <br /> <br />
        <SignInEmailPassword />
      </div>
      <Footer/>
      {/*aqui se va a renderizar el componente de incio de sesión con email y password*/}
    </section>
  );
};
