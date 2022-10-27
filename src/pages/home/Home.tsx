import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { FooterGeneral } from "../../components/footer/FooterGeneral";

interface PropsHome {
  children: JSX.Element;
}

export const Home: FC<PropsHome> = ({ children, ...props }) => {
  return (
    <div>
      {children}
      <Outlet />
      <FooterGeneral />
    </div>
  );
};
