//!librerias

import React, { FC, useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";

//!components

import { Typography } from "@mui/material";

//!hooks
//!styles
//!css
//!firebase-

//!funciones
//!variables u otros
//!types

import { AuthUserInterface } from "../types/GetCharacterAll.services";

import { onAuthStateChanged, getAuth } from "firebase/auth";

/*interface AUTHVIEW {
  getOutApp: any;
  user?: any;
}*/

const AuthView = (props: any) => {
  /*const initialValueAuthUser: AuthUserInterface = {
    accessToken: "",
    auth: " ",
    displayName: "",
    email: "",
    emailVerified: true,
    isAnonymous: false,
    metadata: {},
    phoneNumber: "",
    photoURL: "",
    proactiveRefresh: "",
    providerData: [],
    providerId: "",
    reloadListener: "",
    reloadUserInfo: "",
    stsTokenManager: {},
    tenantId: "",
    uid: "",
  };*/

  /* const navigate = useNavigate();

  const [persistence, setPersistence] = useState<AuthUserInterface | any>(
    initialValueAuthUser
  );*/

  return <div>{props.children}</div>;
};

export default AuthView;










