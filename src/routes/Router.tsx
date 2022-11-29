import { FC, useState, lazy, useEffect, useContext } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AuthContext } from "../context/AuthContext";


//!pasar a lazy loading
import { Home } from "../pages/home/Home";
import { HeaderWithAuth } from "../atomos/Header/HeaderWithAuth";

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
          </div>
        </>
      </Home>
    ),
  },
  {
    path: "/product/:id",
    element: <span>Product</span>,
  },
]);

export const AppRouter = () => {
  const navigate = useNavigate();
  const { userState, handleSession } = useContext(AuthContext);

  useEffect(() => {
    handleSession();
    if (!userState) {
      navigate("/");
    }
  }, [handleSession, userState, navigate]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
