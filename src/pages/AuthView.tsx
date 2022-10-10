import React, { FC, useEffect, useState } from "react";

import { getAuth } from "firebase/auth";

import { useNavigate, useLocation } from "react-router-dom";
interface AUTHVIEW {
  getOutApp: any;
}

export const AuthView: FC<AUTHVIEW> = ({
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
    <div style={{ margin: "0 auto" }}>
      <h1>{persistence?.displayName || ""}</h1>
      <img
        src={`${persistence?.photoURL}`}
        alt=""
        className="w-10"
        style={{ margin: "0 auto" }}
      />
    </div>
  );
};
