import React, { FC, useEffect, useState,memo } from "react";

import { getAuth } from "firebase/auth";

import { useNavigate, useLocation } from "react-router-dom";
interface AUTHVIEW {
  getOutApp: any;
}

const AuthView: FC<AUTHVIEW> = ({
  getOutApp,

  ...props
}): any => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const auth = getAuth();

  const [persistence, setPersistence] = useState<any>("");

  useEffect(() => {
    setPersistence(auth.currentUser);
  }, [auth.currentUser]);

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/");
    }
  });
  return (
    <div style={{ margin: "15px auto" }} className = "grid grid-cols-2 w-64 m-10 place-items-center">
      <h1>Bienvenido {persistence?.displayName || ""}</h1>
      <img
        src={`${persistence?.photoURL || auth.currentUser?.photoURL}`}
        alt=""
        className="w-12 rounded-full"
        style={{ margin: "0 auto" }}
      />
    </div>
  );
};

export default memo(AuthView)