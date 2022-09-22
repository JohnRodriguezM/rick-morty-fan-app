import React, { useState } from "react";
import { HeaderWithOutAuth } from "../../atomos/Header/HeaderWithOutAuth";

import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

import { login, getOutApp, loginGitHub } from "../../firebase/main";

import { useNavigate } from "react-router-dom";

export const WithOutAuth = (props:any) => {
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
    <>
      <HeaderWithOutAuth />

      <button
        onClick={() => {
          login(setLocalStorageGoogle);
        }}
        style={{
          marginTop: "45px",
          backgroundColor: "#1E293B90",
          padding: "10px",
          borderRadius: "10px",
          color: "white",
          border: "none",
        }}
      >
        Login with google <GoogleIcon />
      </button>

      <button
        onClick={() => {
          loginGitHub(setLocalStorageGitHub);
        }}
        style={{
          marginTop: "20px",
          backgroundColor: "black",
          padding: "10px",
          borderRadius: "10px",
          color: "white",
          border: "none",
        }}
      >
        Login with Github <GitHubIcon />
      </button>
    </>
  );
};
