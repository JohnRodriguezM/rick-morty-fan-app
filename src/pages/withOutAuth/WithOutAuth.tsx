import React from "react";
import { HeaderWithOutAuth } from "../../atomos/Header/HeaderWithOutAuth";

import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

import { login, loginGitHub } from "../../firebase/main";

import { useNavigate } from "react-router-dom";
import { SignInEmailPassword } from "./SignInEmailPassword/SignInEmailPassword";

import { Footer } from "../../components/footer/Footer";
import { Carousel } from "../../components/carousel/Carousel";

export const WithOutAuth = (props: any) => {
  const navigate = useNavigate();

  const setLocalStorageGoogle = (value: any) => {
    navigate("/home");
  };

  const setLocalStorageGitHub = (value: any) => {
    navigate("/home");
  };

  return (
    <section style={{ maxHeight: "200vh" }}>
      <HeaderWithOutAuth />
      <div
        className=" flex flex-col items-center justify-center bg-white
        w-11/12 max-w-sm mx-auto my-10 p-2 rounded-3xl shadow-lg
        "
        style={{ height: "420px" }}
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
        <br />
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
