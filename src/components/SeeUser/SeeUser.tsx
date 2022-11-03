import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";

export const SeeUser = () => {
  const navigate = useNavigate();
  const { userState, setUserState, handleSession } = useContext(AuthContext);

  useEffect(() => {
    //*deberia ejecutarse en un then
    handleSession();
    if (userState) return;
    setUserState(null);
    navigate("/");
  }, [userState, navigate, handleSession]);

  return (
    <div>
      {userState && (
        <section
          className={`my-10
   mx-auto
  ${
    userState["displayName"]
      ? "grid grid-cols-2 w-64 m-10 place-items-center"
      : ""
  }
    `}
        >
          <>
            <h1>Bienvenido {userState["displayName"] ?? userState["email"]}</h1>
            <img
              src={`${userState["photoURL"]}`}
              alt=""
              className="w-12 rounded-full my-0 mx-auto"
            />
          </>
        </section>
      )}
    </div>
  );
};
