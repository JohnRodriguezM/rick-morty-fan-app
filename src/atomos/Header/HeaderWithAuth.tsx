import React, { useState, useEffect,FC } from "react";




//*hooks

import { useView } from "../../hooks/useView";

import { Link } from "react-router-dom";

//* css files
import "../../css/defaultCss/Header.css";

//*sign up

interface HeaderWithAuthh {
  dataCharacter: any[];
}

export const HeaderWithAuth: FC<HeaderWithAuthh> = ({dataCharacter, ...props}) => {
  //* con este state manejo el close y el open del menú de hamburguesa con dos elementos desplegables diferentes -- btn close y boton de linea 39
  const [hamburgerView, toggleHamburger] = useView();

  //* abre la section que en este momento se llama see more  - btn-close-more
  const [seemoreOption, setSeeMoreOption] = useView();

  //* abre la seccion que se llama see solutions - btn-close-solutions
  const [seeSolutions, setSeeSolution] = useView();

  //*section de ver character en mobile
  const [seeCharacterMobile, setSeeCharacterMobile] = useView();

  //! en la linea 440 esta oculto el div de los botones de sign in - sign up, agregar algo obligatorio o si no se desborda el boton de see more

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-gray-100 py-5 md:justify-start md:space-x-10">
         

          <div className="flex justify-start lg:w-0 lg:flex-1">
            {
              //* inicio del header de mobile, se debe realizar una modificación para que sea congruente con el header de desktop
            }

            <Link to="/">
              {/*<img cara de morty, está conectada al home*/}
              <span className="sr-only">Workflow</span>
              <img
                width=""
                className="h-8 w-auto sm:h-10"
                src="https://assets.bigcartel.com/product_images/208865842/MortyPin.jpg?auto=format&fit=max&w=2000"
                alt="h"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            {/*boton de hamburguesa, expand menú mobile --- */}
            <button
              type="button"
              onClick={toggleHamburger}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              {/* expand menú mobile --- */}
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: outline/menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
              <button
                type="button"
                id="btn-close-solutions"
                onClick={setSeeSolution}
                className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span onClick={() => setSeeSolution(true)}>Characters</span>
                <svg
                  className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/*el botón more,abre este div*/}
              <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div
                    className={`${
                      seeSolutions
                        ? "active relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                        : "inactive"
                    }`}
                  >
                    {dataCharacter.map((el: any) => {
                      return (
                        <Link
                          key={el.id}
                          className="
                          text-base font-medium text-gray-500 hover:text-gray-900 m-3 p-3 flex items-start rounded-lg"
                          to={`/home/character/${el.id}`}
                          id={el.id}
                        >
                          visit {el.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {" "}
              Pricing -----{" "}
            </a>
            <div className="relative">

              <button
                type="button"
                onClick={setSeeMoreOption}
                id="btn-close-more"
                className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span>More</span>
 
                <svg
                  className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/*boton see more abre este div*/}
              <div
                className={`${
                  seemoreOption
                    ? "active absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                    : "inactive"
                }`}
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                   
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      {/*<!-- Heroicon name: outline/calendar -->*/}
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Events
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          See what meet-ups and other events we might be
                          planning near you.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                      {/*<h3 className="text-base font-medium text-gray-500">
                        Recent Posts
                      </h3>*/}
                      <ul role="list" className="mt-4 space-y-4">
                        <li className="text-base truncate">
                          <a
                            href="#"
                            className="font-medium text-gray-900 hover:text-gray-700"
                          >
                            {" "}
                            How to use search engine optimization to drive
                            traffic to your site{" "}
                          </a>
                        </li>
                        {/**/}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://w7.pngwing.com/pngs/913/852/png-transparent-rick-sanchez-morty-smith-rick-and-morty-season-3-pocket-mortys-drawing-rick-and-morty-icons-hand-human-head.png"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <button
                  onClick={toggleHamburger}
                  type="button"
                  id="btn-close"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  {/*<!-- Heroicon name: outline/x -->*/}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
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
                          ? "active relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
                          : "inactive"
                      }`}
                    >
                      {dataCharacter.map((el: any) => {
                        return (
                          <Link
                            key={el.id}
                            className="text-base font-medium text-gray-500 hover:text-gray-900 m-3 p-3 flex items-start rounded-lg"
                            to={`/home/character/${el.id}`}
                            id={el.id}
                          >
                            visit {el.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <p
                  onClick={() => {
                    setSeeCharacterMobile(true);
                  }}
                >
                  Ver characters
                </p>

                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  {/*<!-- Heroicon name: outline/cursor-click -->*/}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    {" "}
                    Characters{" "}
                  </span>
                </a>

                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    {" "}
                    Sign up for the newsletter{" "}
                  </span>
                </a>

                <a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  {/*<!-- Heroicon name: outline/view-grid -->*/}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    {" "}
                    About Developer -- linea 390 revisar{" "}
                  </span>
                </a>

                {/*<a
                  href="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900">
                    {" "}
                    Automations{" "}
                  </span>
                </a>*/}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            {/*<div>
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                {" "}
                Sign up{" "}
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  {" "}
                  Sign in{" "}
                </a>
              </p>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};
