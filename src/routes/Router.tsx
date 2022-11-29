import { FC, lazy, useEffect, useContext } from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AuthContext } from "../context/AuthContext";

//!pasar a lazy loading
import { Home } from "../pages/home/Home";
import { HeaderWithAuth } from "../atomos/Header/HeaderWithAuth";
import { SeeUser } from "../components/SeeUser/SeeUser";
import { ViewEpisodes } from "../components/Allepisodes/ViewEpisodes";
import { Contributions } from "../pages/Contributions/Contributions";

//*import de component para el router con lazy loading
const WithOutAuth = lazy(() =>
  import("../pages/withOutAuth/WithOutAuth").then((module) => ({
    default: module.WithOutAuth,
  }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <WithOutAuth />,
  },
  {
    path: "/home/*",
    element: (
      <Home>
        <>
          <HeaderWithAuth />
          <div>
            <ToastContainer />
            <SeeUser />
            <ViewEpisodes />
          </div>
        </>
      </Home>
    ),
    children: [
      {
        path: "contributions",
        element:  <Contributions/>,
      },
    ],
  },
  /*{
    path: "home/contributions",
    element: <Contributions />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home/contributions/characters" />,
      },
    ],
  },*/
]);

export const AppRouter = () => {
  /*const navigate = useNavigate();*/
  const { userState, handleSession } = useContext(AuthContext);

  useEffect(() => {
    handleSession();
    if (!userState) {
      <Navigate replace to="/" />;
    }
  }, [handleSession, userState]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
