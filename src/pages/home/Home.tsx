import React, { FC } from "react";

interface PropsHome {
  children: JSX.Element;
}

export const Home: FC<PropsHome> = ({ children,...props }) => <div>{children}</div>;
