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
    /*console.log(value)*/
    props.setGoogleAuth(value);
    navigate("/home");
   /* window.localStorage.setItem("googleToken", JSON.stringify(value));*/
  };

  const setLocalStorageGitHub = (value: any) => {
    /*props.setGhAutg(value);*/
    console.log(value)
    navigate("/home");
    /*window.localStorage.setItem("githubToken", JSON.stringify(value));*/
  };

  return (
    <section style={{ maxHeight: "200vh" }}>
      <HeaderWithOutAuth />
      <div
        className="container-fluid"
        style={{
          width: "95%",
          height: "450px",
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

            background:
              "linear-gradient(rgba(116, 9, 121, 1), rgba(185, 8, 246, 1), rgba(91, 28, 230, 1))",

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
            background:
              "linear-gradient(rgba(116, 9, 121, 1), rgba(185, 8, 246, 1), rgba(91, 28, 230, 1))",
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
        style={{
          height: "150px",
          width: "0",
          margin: "25px auto",
          marginBottom: "15px",
          border: "1.5px solid",
          transform: "rotate(180deg)",
          borderImage:
            "linear-gradient( 1turn, rgba(116, 9, 121, 1), rgba(185, 8, 246, 1), rgba(91, 28, 230, 1) ) 1 / 3px",
        }}
      ></p>
      <h1
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
        }}
      >
        Photos of some realities
      </h1>
      <Carousel />
      <Footer />
      {/*aqui se va a renderizar el componente de incio de sesión con email y password*/}
    </section>
  );
};
