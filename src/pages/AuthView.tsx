import React, { FC, useState, useEffect } from "react";

import {useNavigate} from "react-router-dom";
interface AUTHVIEW {
  google: any;
  setGoogle: Function;
  getOutApp: any;
  /*loginGitHub: any;*/
  ghAuth: any;
}

export const AuthView: FC<AUTHVIEW> = ({
  google,
  setGoogle,
  getOutApp,
  /*loginGitHub,*/
  ghAuth,
  ...props
}): any => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>hola {google?.user.displayName ?? ghAuth?.user.displayName ?? "holaaa"}</h1>
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
