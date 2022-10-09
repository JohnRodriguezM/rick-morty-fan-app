import React, { FC, useState, useEffect } from "react";

import {getAuth} from 'firebase/auth'


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
  const auth = getAuth()
  console.log('soy authhh', auth.currentUser)


  return (
    <div>
     <h1>
        {`Hola ${ auth.currentUser?.displayName}`}
          
      </h1>
    </div>
  );
};
