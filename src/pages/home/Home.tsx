import React, { FC } from "react";
import {Outlet} from "react-router-dom";
interface PropsHome {
  children: JSX.Element;
}

export const Home: FC<PropsHome> = ({ children,...props }) => {  
  return (
    <div>
  {children}
  <Outlet/>
  </div>
  )
} 
