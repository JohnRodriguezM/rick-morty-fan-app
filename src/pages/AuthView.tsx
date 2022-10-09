import React, { FC, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
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
  return (
    <div>
     <h1>
        {`Hola ${googleAuth?.user.displayName}` ??
          `Hola ${ghAuth?.user.displayName}` ??
          "Bienvendio"}
      </h1>
    </div>
  );
};
