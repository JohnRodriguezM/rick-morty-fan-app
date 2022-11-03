import { useState, createContext, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
  userState: null,
  setUserState: (user: any) => {},
  handleSession: () => {},
});

export const AuthProvider = ({ children }: any) => {
  /*const navigate = useNavigate()*/
  const [userState, setUserState] = useState<any>(null);

  const handleSession = () => {
    onAuthStateChanged(getAuth(), (user: any): any => {
      return setUserState(user);
    });
  };

  const dataAuth = {
    userState,
    setUserState,
    handleSession,
  };
  return (
    <AuthContext.Provider value={dataAuth}>{children}</AuthContext.Provider>
  );
};
