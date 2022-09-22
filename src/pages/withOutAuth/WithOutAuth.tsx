import React, {useState} from 'react'
import { HeaderWithOutAuth } from '../../atomos/Header/HeaderWithOutAuth'


import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";


import { login, getOutApp, loginGitHub } from "./firebase/main";

export const WithOutAuth = () => {
  const recoveryDataGoogle: any = localStorage.getItem("googleToken");
  const [googleAuth, setGoogleAuth] = useState<any>(
    "" || JSON.parse(recoveryDataGoogle)
  );

  const [ghAuth, setGhAutg] = useState<any>("");


  const setLocalStorageGoogle = (value: any) => {
    //* actualizo los dos estados identicos que tengo para poder guardarlos y usarlos ambos desde local storage
    setGoogleAuth(value);
    /*setDataBackUpCharacter(value)*/
    window.localStorage.setItem("googleToken", JSON.stringify(value));
  };

  const setLocalStorageGitHub = (value: any) => {
    //* actualizo los dos estados identicos que tengo para poder guardarlos y usarlos ambos desde local storage
    setGhAutg(value);
    /*setDataBackUpCharacter(value)*/
    window.localStorage.setItem("githubToken", JSON.stringify(value));
  };



  return (
    <>
      <HeaderWithOutAuth/>

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
  )
}
