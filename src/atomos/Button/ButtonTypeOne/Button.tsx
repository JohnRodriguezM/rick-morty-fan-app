//!librerias


import { FC } from "react";

//!componentes
//!hooks
//!firebase
//!funciones
//! variables u otros
//! archivos css

//! types importados o internos

import { ButtonProps } from "./type";

export const Button: FC<ButtonProps> = ({
  text,
  onClick,
  className,
  type,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      aria-expanded="false"
    >
      {text ?? props.children}
    </button>
  );
};
