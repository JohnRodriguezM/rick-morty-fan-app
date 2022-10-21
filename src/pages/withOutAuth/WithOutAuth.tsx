//!librerias

import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

//!components

import { HeaderWithOutAuth } from "../../atomos/Header/HeaderWithOutAuth";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SignInEmailPassword } from "./SignInEmailPassword/SignInEmailPassword";
import { SignUpEmailPassword } from "./SignUpEmailPassword/SignUpEmailPassword";
import { Footer } from "../../components/footer/Footer";
import { Carousel } from "../../components/carousel/Carousel";
import { Typography } from "@mui/material";

//!hooks
//!styles
//!css
//!firebase-

import { login, loginGitHub } from "../../firebase/main";

//!funciones
//!variables u otros
//!types

export const WithOutAuth: FC = ({ ...props }) => {
  const navigate = useNavigate();

  const [viewSign, setViewSign] = useState(false);

  const setLocalStorageGoogle = (value: any) => {
    /* el value recibo no tiene una influencia en el localstorage de manera momentanea - console.log(value);*/
    navigate("/home");
  };

  const setLocalStorageGitHub = (value: any) => {
    /* el value recibo no tiene una influencia en el localstorage de manera momentanea - console.log(value);*/
    navigate("/home");
  };

  return (
    <section>
      {viewSign ? (
        <SignUpEmailPassword setViewSign={setViewSign} />
      ) : (
        <>
          <HeaderWithOutAuth setViewSign={setViewSign} />
          <section
            className=" flex flex-col items-center justify-center bg-white
        w-11/12 max-w-sm mx-auto my-10 p-2
         rounded-3xl shadow-lg
        "
            style={{ height: "420px" }}
          >
            <br />
            <button
              onClick={() => {
                login(setLocalStorageGoogle);
              }}
              className="w-10/12 p-3 rounded-lg bg-white border-opacity-60"
              style={{
                background:
                  "linear-gradient(rgba(116, 9, 121, 1), rgba(185, 8, 246, 1), rgba(91, 28, 230, 1))",
              }}
            >
              {" "}
              Login with google <GoogleIcon />
            </button>{" "}
            <br />
            <button
              onClick={() => {
                loginGitHub(setLocalStorageGitHub);
              }}
              className="w-10/12 p-3 rounded-lg bg-white border-opacity-60"
              style={{
                background:
                  "linear-gradient(rgba(116, 9, 121, 1), rgba(185, 8, 246, 1), rgba(91, 28, 230, 1))",
              }}
            >
              Login with Github <GitHubIcon />
            </button>{" "}
            <br />
            <SignInEmailPassword />
          </section>
          <Typography
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
          ></Typography>
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
            }}
          >
            Photos of some realities
          </Typography>
          <Carousel />
          <Footer />
          {/*aqui se va a renderizar el componente de incio de sesión con email y password*/}
        </>
      )}
    </section>
  );
};
