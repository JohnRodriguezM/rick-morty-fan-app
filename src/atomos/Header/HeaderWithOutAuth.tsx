//!librerias

import { FC } from "react";
import { Link } from "react-router-dom";

//!componentes

import { Button } from "../Button/ButtonTypeOne/Button";
import { buttonTypeOneType } from "../Button/ButtonTypeOne/type";
//? import svg component
import { SvgComponent } from "../Svg/SvgComponent";

//!hooks

//? hook use view para modales
import { useView } from "../../hooks/useView";

//! archivos css

//? css
import "./Header.css";

//!firebase
//!funciones
//! variables u otros

export let imageHeaderWithOutAuth =
  "https://assets.bigcartel.com/product_images/208865842/MortyPin.jpg?auto=format&fit=max&w=2000";

//! types importados o internos
interface WithOutAuthProps {
  data?: () => void;
}

export const HeaderWithOutAuth: FC<WithOutAuthProps> = ({
  ...props
}) => {
  //? el estado inicial por defecto está en false
  const [viewHamburger, setViewHamburger] = useView();

  return (
    <section className="relative bg-[#0C0428]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-gray-100 py-5 md:justify-between md:space-x-10">
          <section className="flex justify-between lg:w-0 lg:flex-1">
            <img
              className="h-10 w-auto sm:h-10 rounded-[20px]"
              src={imageHeaderWithOutAuth}
              alt="h"
            />
          </section>
          <div className="-mr-2 -my-2 md:hidden">
            {/*button de hamburger open, mobile*/}
            <Button
              className="bg-white p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={setViewHamburger}
              type={buttonTypeOneType.primary}
            >
              <SvgComponent d="M4 6h16M4 12h16M4 18h16" />
            </Button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              {/*button de crear cuenta en desktop dentro del menor de hover (crear cuenta)*/}
              <Link
                to="/signup"
                className="text-base font-medium text-white hover:text-gray-300"
                type="button"
              >
                Create a new account
              </Link>
            </div>
          </nav>
        </div>
      </section>
      <div
        className={`${
          viewHamburger
            ? "active absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            : "inactive absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        }`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-white">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto rounded-[12px]"
                  src={imageHeaderWithOutAuth}
                  alt="Morty-Pin"
                />
              </div>
              <div className="-mr-2">
                {/*Button (X) para cerrar el menú en mobile*/}
                <Button
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={setViewHamburger}
                  type={buttonTypeOneType.primary}
                >
                  <SvgComponent d="M6 18L18 6M6 6l12 12" />
                </Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <section className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <SvgComponent
                    className="flex-shrink-0 h-6 w-6 text-blue-900"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                  {/*
                    Button de crer cuenta en mobile, dentro del menú hamburger (crear cuenta)
                  */}
                  <Link
                    to="/signup"
                    onClick={setViewHamburger}
                    type="button"
                    className="ml-3 text-base font-medium text-gray-600 hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    Cretate a new account
                  </Link>
                </section>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
