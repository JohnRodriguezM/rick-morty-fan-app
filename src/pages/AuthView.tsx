import React, { FC, useState, useEffect } from "react";

import {useNavigate} from "react-router-dom";
interface AUTHVIEW {
  googleAuth: any;
  setGoogleAuth: Function;
  getOutApp: any;
  /*loginGitHub: any;*/
  ghAuth: any;
}

export const AuthView: FC<AUTHVIEW> = ({
  googleAuth,
  setGoogleAuth,
  getOutApp,
  /*loginGitHub,*/
  ghAuth,
  ...props
}): any => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>hola {googleAuth?.user.displayName ?? ghAuth?.user.displayName ?? "holaaa"}</h1>
      <button
        onClick={() => {
          navigate("/");
          localStorage.removeItem("googleToken");
          getOutApp();
        }}
      >
        cerrar sesión
      </button>
    </div>
  );
};
