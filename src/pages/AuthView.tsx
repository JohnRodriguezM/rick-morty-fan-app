//!librerias

import React, { FC, useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";

//!components

import { Typography } from "@mui/material";

//!hooks
//!styles
//!css
//!firebase-

import { getAuth } from "firebase/auth";

//!funciones
//!variables u otros
//!types

import { AuthUserInterface } from "../types/GetCharacterAll.services";

interface AUTHVIEW {
  getOutApp: any;
}

const AuthView: FC<AUTHVIEW> = ({
  getOutApp,
  ...props
}): any => {

  const initialValueAuthUser: AuthUserInterface = {
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
  };

  const navigate = useNavigate();
  const { currentUser } = getAuth();

  const [persistence, setPersistence] = useState<AuthUserInterface | any>(
    initialValueAuthUser
  );

  useEffect(() => {
    setPersistence(currentUser);
  }, [currentUser]);

  /*useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  });*/

  return (
    <section
      className={`my-10
        mx-auto
        ${
          persistence.displayName
            ? "grid grid-cols-2 w-64 m-10 place-items-center"
            : ""
        }
        `}
    >
      {persistence.displayName ? (
        <>
          <h1>Bienvenido, {persistence?.displayName || ""}</h1>
          <img
            src={`${persistence?.photoURL || currentUser?.photoURL}`}
            alt=""
            className="w-12 rounded-full my-0 mx-auto"
          />
        </>
      ) : (
        <Typography>
          Bienvenido, <b>{persistence.email}</b>
        </Typography>
      )}
    </section>
  );
};

export default memo(AuthView);
