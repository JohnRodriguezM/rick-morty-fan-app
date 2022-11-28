import { useState, createContext } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";

export const AuthContext = createContext({
  userState: null,
  setUserState: (user: any) => {},
  handleSession: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [userState, setUserState] = useState<any>(null);

  const handleSession = () => {
    onAuthStateChanged(getAuth(), (user: any): any => {
      console.log("user", user);
      return setUserState(user);
    });
    return userState;
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
