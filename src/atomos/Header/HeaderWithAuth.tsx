//!librerias

import React, { useState, useEffect, FC } from "react";
//*axios getAllCharacter
import axios from "axios";
//*react-router-dom
import { Link, useNavigate, useLocation } from "react-router-dom";

//!components

//*componente para reutilizar la svg ypath
import { SvgComponent } from "../Svg/SvgComponent";

//!hooks
import { useView } from "../../hooks/useView";

//!firebase

//*get out app
import { getOutApp } from "../../firebase/main";

//!funciones
//!variables u otros

//*url getAllCharacter
import { getAllCharacter } from "../../helpers/urls";
//*imagen
import { imageHeaderWithOutAuth } from "./HeaderWithOutAuth";

//! archivos css
//!types importados o en el archivo
interface HeaderWithAuthh {
  data?: any;
}

export const HeaderWithAuth: FC<HeaderWithAuthh> = ({ data, ...props }) => {
  const [character, setCharacter] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(getAllCharacter);
        setCharacter(results);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  //* con este state manejo el close y el open del menú de hamburguesa con dos elementos desplegables diferentes -- btn close y boton de linea 39
  const [hamburgerView, setHamburgerView] = useView();

  //* abre la section que en este momento se llama see more  - btn-close-more
  const [seemoreOption, setSeeMoreOption] = useView();

  //* abre la seccion que se llama see solutions - btn-close-solutions
  const [seeSolutions, setSeeSolution] = useView();

  //*section de ver character en mobile
  const [seeCharacterMobile, setSeeCharacterMobile] = useView();

  //! en la linea 440 esta oculto el div de los botones de sign in - sign up, agregar algo obligatorio o si no se desborda el boton de see more
  const [manageGoHome, setManageGoHome] = useState(false);

  const handleGetOut = () => {
    getOutApp();
    navigate("/");
  };

  //? para que aparezca el go home en el header
  useEffect(() => {
    pathname === "/home" ? setManageGoHome(false) : setManageGoHome(true);
    return () => {
      setManageGoHome(false);
    };
  }, [pathname]);

  return (
    <div className="relative bg-white  z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-gray-100 py-5 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {
              //* inicio del header de mobile, se debe realizar una modificación para que sea congruente con el header de desktop
            }

            <Link to="/home">
              {/*<img cara de morty, está conectada al home*/}
              <span className="sr-only">Workflow</span>
              <img
                width=""
                className="h-8 w-auto sm:h-10"
                src={imageHeaderWithOutAuth}
                alt="h"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            {/*boton de hamburguesa, expand menú mobile --- */}
            <button
              type="button"
              onClick={() => {
                setHamburgerView();
              }}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              {/* expand menú mobile --- */}
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: outline/menu --> */}
              <SvgComponent d="M4 6h16M4 12h16M4 18h16" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
              <Link
                to="/home/all-characters"
                type="button"
                id="btn-close-solutions"
                className="ml-3text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium text-gray-500 mr-2 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-expanded="false"
              >
                Main characters
              </Link>
              <button
                type="button"
                id="btn-close-solutions"
                onClick={setSeeSolution}
                className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  ml-3 cursor-pointer
                "
                aria-expanded="false"
              >
                <span className="cursor-pointer">Characters</span>
                <SvgComponent
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                />
              </button>
              {/*el botón more,abre este div*/}
              <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div
                    className={`${
                      seeSolutions
                        ? "active relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 overflow-scroll max-h-96                        "
                        : "inactive"
                    }`}
                  >
                    {character.map((el: any) => {
                      const { id, name } = el;
                      return (
                        <Link
                          key={id}
                          onClick={() => setSeeSolution(false)}
                          className="
                          text-base font-medium text-gray-500 hover:text-gray-900 m-1 p-1 flex items-start rounded-lg"
                          to={`/home/character/${id}`}
                          id={id}
                        >
                          see {name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Link
                to="/home"
                className={`${
                  manageGoHome
                    ? "text-base font-medium text-gray-500 hover:text-gray-900"
                    : "inactive"
                } `}
              >
                {manageGoHome ? "Go home" : ""}
              </Link>
              <button
                type="button"
                onClick={() => {
                  navigate("/home/contributions");
                }}
                id="btn-close-more"
                className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-6 cursor-pointer"
                aria-expanded="false"
              >
                <span>Contributions</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSeeMoreOption(false);
                  handleGetOut();
                }}
                id="btn-close-more"
                className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-6"
                aria-expanded="false"
              >
                <span>Cerrar Sesión</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div
        className={`${
          hamburgerView
            ? "active absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            : "inactive absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        }`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div
            className="pt-5 pb-6 px-5"
            onClick={() => setSeeCharacterMobile(true)}
          >
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src={imageHeaderWithOutAuth}
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <button
                  onClick={setHamburgerView}
                  type="button"
                  id="btn-close"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  {/*<!-- Heroicon name: outline/x -->*/}
                  <SvgComponent d="M6 18L18 6M6 6l12 12" />
                </button>
              </div>
            </div>

            <div className="mt-6">
              <nav className="grid gap-y-8">
                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div
                      
                      className={`${
                        seeCharacterMobile
                          ? "active relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 overflow-scroll max-h-96"
                          : "inactive"
                      }`}
                    >
                      {character.map((el: any) => {
                        const { id, name } = el;
                        return (
                          <Link
                            key={id}
                            onClick={() => {
                              setSeeCharacterMobile(false);
                              setHamburgerView(false);
                            }}
                            className="text-base font-medium text-gray-500 hover:text-gray-900 m-1 p-1 flex items-start rounded-lg"
                            to={`/home/character/${id}`}
                            id={id}
                          >
                            see {name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <span
                  className="ml-3 text-base font-medium text-gray-900 mt-6 cursor-pointer"
                  onClick={() => {
                    setSeeCharacterMobile(false);
                  }}
                >
                  Characters{" "}
                </span>

                <Link
                  className="ml-3 text-base font-medium text-gray-900"
                  to={`/home/all-characters`}
                  onClick={() => {
                    setHamburgerView();
                    setSeeMoreOption(false);
                  }}
                >
                  Main characters{" "}
                </Link>

                <Link
                  className="ml-3 text-base font-medium text-gray-900"
                  to="/home"
                >
                  Go home{" "}
                </Link>
                <Link
                  onClick={setHamburgerView}
                  className="ml-3 text-base font-medium text-gray-900"
                  to="/home/contributions"
                >
                  {" "}
                  Contribution{" "}
                </Link>

                <span
                  className="ml-3 text-base font-medium text-gray-900"
                  onClick={() => {
                    setSeeMoreOption(false);
                    handleGetOut();
                  }}
                >
                  {" "}
                  cerrar sesión{" "}
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
