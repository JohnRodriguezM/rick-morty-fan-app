import React, { FC, useState, useEffect } from "react";

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
  return (
    <div>
      <h1>hola {google?.user.displayName ?? ghAuth.user.displayName}</h1>
      <button
        onClick={() => {
          setGoogle(false);
          localStorage.removeItem("googleToken");
          getOutApp();
        }}
      >
        cerrar sesión
      </button>
    </div>
  );
};
