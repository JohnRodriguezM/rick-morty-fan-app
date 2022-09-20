import React, { FC, useState, useEffect } from "react";

interface AUTHVIEW {
  google: any;
  setGoogle: Function;
  getOutApp: any;
}

export const AuthView: FC<AUTHVIEW> = ({
  google,
  setGoogle,
  getOutApp,
  ...props
}): any => {
  return (
    <div>
      <h1>hola {google?.user.displayName}</h1>
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
