import React from "react";
import { HeaderWithOutAuth } from "../../atomos/Header/HeaderWithOutAuth";

import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

import { login, loginGitHub } from "../../firebase/main";

import { useNavigate } from "react-router-dom";
import { SignInEmailPassword } from "../SignInEmailPassword";

import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import { Footer } from "../../components/footer/Footer";
import { Carousel } from "../../components/carousel/Carousel";

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
    <section style = {{maxHeight:"200vh"}}>
      <HeaderWithOutAuth />
      <div
        style={{
          width: "95%",
          height: "100%",
          maxWidth: "400px",
          borderRadius: "40px",
          margin: "50px auto 10px auto",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#fff",
        }}
      >
        <br />
        <button
          onClick={() => {
            login(setLocalStorageGoogle);
          }}
          style={{
            width: "88%",
            /* marginTop: "4px",*/
            backgroundColor: "#b535f6",
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
            width: "88%",
            /*marginTop: "4px",*/
            backgroundColor: "#b535f6",
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
      <p

        style = {{
          height: "98px",
          width: "0",
          margin: "0 auto",
          marginBottom: "15px",
          border: "1.5px solid",
          transform: "rotate(180deg)",
          borderImage: "linear-gradient( 1turn, rgba(116, 9, 121, 1), rgba(185, 8, 246, 1), rgba(91, 28, 230, 1) ) 1 / 3px",
        }}
      ></p>
      <h2>fotitos de todas las realidades</h2>
      <Carousel />
      <Footer />
      {/*aqui se va a renderizar el componente de incio de sesión con email y password*/}
    </section>
  );
};
